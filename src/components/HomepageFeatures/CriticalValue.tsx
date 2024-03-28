import { ErrorMessage,Field } from "formik";
import { FC } from "react";

const CriticalValue: FC = () => {
	return <div className="critical">
		<h3> Valeur critique </h3>
		<div>
			<label htmlFor="critical.success">Succès : </label>
			<Field
				name="critical.success"
				type="number"
			/>
			<ErrorMessage name="critical.success" />
		</div>
		<div>
			<label htmlFor="critical.failure">Échec : </label>
			<Field
				name="critical.failure"
				type="number"
			/>
			<ErrorMessage name="critical.failure" />
		</div>
	</div>;
};

export default CriticalValue;