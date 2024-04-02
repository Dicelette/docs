/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { FC } from "react";

import { Statistic, StatisticalTemplate } from "@dicelette/core";
import { verifyTemplateValue } from "@dicelette/core";
import CriticalValue from "./Blocks/CriticalValue";
import Dices from "./Blocks/Dices";
import General from "./Blocks/General";
import Statistics from "./Blocks/Statistics";
import { errorCode } from "./errorsTranslation";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";

const TemplateForm: FC = () => {
	const downloadJSON = (data: any) => {
		//convert statistic to Statistic interface
		let stat: Statistic|undefined = {};
		let diceSkill: { [key: string]: string }|undefined = {};
		for (const statistic of data.statistics) {
			stat[statistic.name] = {
				combinaison: statistic.combinaison,
				max: statistic.max,
				min: statistic.min,
			};
		}
		for (const damage of data.damages) {
			diceSkill[damage.name] = damage.value;
		}
		if (Object.keys(stat).length === 0) stat = undefined;
		if (Object.keys(diceSkill).length === 0) diceSkill = undefined;
		const templateDataValues: StatisticalTemplate = {
			charName: data.isCharNameRequired,
			critical: data.critical,
			diceType: data.diceType,
			total: data.total,
			statistics: stat,
			damage: diceSkill,
		};
		
		
		try {
			const template = verifyTemplateValue(templateDataValues);
			const blob = new Blob([JSON.stringify(template, null, 2)], {
				type: "application/json",
			});
			const url = URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "statisticalTemplate.json";
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			URL.revokeObjectURL(url);
		} catch (error) {
			const msg = errorCode(error);
			alert(msg);
		}
	};

	const handleSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			downloadJSON(values);
			setSubmitting(false);
		}, 400);
	};

	const detectAnyErrorClassInPage = () => {
		const isBrowser = useIsBrowser();
		if (!isBrowser) return false;
		const errorClasses = document.getElementsByClassName("error");
		const duplicateErrorClass= document.getElementsByClassName("bg-rose-300");
		if (errorClasses.length > 0 || duplicateErrorClass.length > 0) {
			return true;
		}
		return false;
	};

	const buttonDisabled = (isSubmitting: boolean) => {
		return detectAnyErrorClassInPage() ? (
			<Button
				type="submit"
				disabled={true}
				variant="outlined"
				size="medium"
				id="disabledButton"
				className="download-button"
			>{translate({message: "Télécharger le modèle"})}</Button>) : (<Button
			type="submit"
			disabled={isSubmitting}
			variant="outlined"
			size="medium"
			className="download-button"
		>{translate({message: "Télécharger le modèle"})}</Button>);
	};

	return (
		<Formik
			initialValues={{
				isCharNameRequired: false,
				statistics: [],
				total: 0,
				diceType: "",
				critical: { success: 20, failure: 1 },
				damages: [],
			}}
			
			onSubmit={handleSubmit}>
			{({ isSubmitting, values }) => (
				<Form>
					<General />
					<CriticalValue critical={values.critical}/>
					<Statistics values={values} />
					<Dices values={values}	/>
					{buttonDisabled(isSubmitting)}
				</Form>
			)}
		</Formik>
	);
};

export default TemplateForm;
