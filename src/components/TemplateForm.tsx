import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { FC } from "react";

import emptyForm from "../types/EmptyForm";
import { Template } from "../types/Template";
import CriticalValue from "./Blocks/CriticalValue";
import Dices from "./Blocks/Dices";
import General from "./Blocks/General";
import Statistics from "./Blocks/Statistics";

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
