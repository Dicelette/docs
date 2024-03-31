import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { FC } from "react";

import { Statistic, StatisticalTemplate } from "../@core/core/interface";
import { verifyTemplateValue } from "../@core/core/verify_template";
import emptyForm from "../types/EmptyForm";
import { Template } from "../types/Template";
import CriticalValue from "./Blocks/CriticalValue";
import Dices from "./Blocks/Dices";
import General from "./Blocks/General";
import Statistics from "./Blocks/Statistics";

const TemplateForm: FC = () => {
	const downloadJSON = (data: Template) => {
		//convert statistic to Statistic interface
		const stat: Statistic = {};
		for (const statistic of data.statistics) {
			stat[statistic.name] = {
				combinaison: statistic.values.combinaison,
				max: statistic.values.max,
				min: statistic.values.min,
			};
		}
		const diceSkill: {[name: string]: string} = {};
		for (const dice of data.damages) {
			diceSkill[dice.name] = dice.value;
		}
		const templateDataValues: StatisticalTemplate = {
			charName: data.isCharNameRequired,
			critical: data.critical,
			diceType: data.diceType,
			total: data.total,
			statistics: stat,
			damage: diceSkill
		};
		try {
			verifyTemplateValue(templateDataValues);
			const blob = new Blob([JSON.stringify(templateDataValues, null, 2)], {
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
			alert(error.message);
		}
	};

	const handleSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			downloadJSON(values);
			setSubmitting(false);
		}, 400);
	};

	return (
		<Formik
			initialValues={emptyForm}
			onSubmit={handleSubmit}>
			{({ isSubmitting, values }) => (
				<Form>
					<General />
					<CriticalValue />
					<Statistics statistics={values.characters ?? []} />
					<Dices dices={values.damages ?? []}	/>
					<Button
						type="submit"
						disabled={isSubmitting}
						variant="outlined"
						size="medium"						
					>Télécharger le JSON</Button>
				</Form>
			)}
		</Formik>
	);
};

export default TemplateForm;
