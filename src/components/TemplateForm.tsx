import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { FC } from "react";

import emptyForm from "../types/EmptyForm";
import { Template } from "../types/Template";
import templateValidator from "../validators/TemplateValidation";
import CriticalValue from "./HomepageFeatures/CriticalValue";
import Dices from "./HomepageFeatures/Dices";
import General from "./HomepageFeatures/General";
import Statistics from "./HomepageFeatures/Statistics";

const TemplateForm: FC = () => {
	const downloadJSON = (data: Template) => {
		const blob = new Blob([JSON.stringify(data, null, 2)], {
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
			validationSchema={templateValidator}
			onSubmit={handleSubmit}>
			{({ isSubmitting, values }) => (
				<Form>
					<General />
					<CriticalValue />
					<Statistics characters={values.characters ?? []} />
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
