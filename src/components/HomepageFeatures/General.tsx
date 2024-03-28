import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Field, FieldProps } from "formik";
import { FC } from "react";

const General: FC = () => {
	return (
		<div className="flex flex-col">
			<span className="text-lg font-bold"> Général </span>
			<Field
				name="name"
				render={({ field }: FieldProps<boolean>) => {
					return (
						<FormControlLabel
							className="mb-2 self-start !ml-0"
							control={
								<Checkbox
									aria-label={field.name}
									name={field.name}
								/>
							}
							labelPlacement="start"
							label="Rendre le nom du personnage obligatoire"
						/>
					);
				}}
			/>
			<Field
				name="diceType"
				render={({ field, form: { errors } }: FieldProps<number>) => {
					return (
						<TextField
							className="!mb-4 w-[400px]"
							error={errors[field.name] !== undefined}
							label="Total (facultatif) :"
							size="small"
						/>
					);
				}}
			/>
			<Field
				name="total"
				render={({ field }: FieldProps<number>) => {
					return (
						<TextField
							aria-label={field.name}
							className="!mb-4 w-[400px]"
							label="Dé majeur (facultatif) :"
							size="small"
						/>
					);
				}}
			/>
		</div>
	);
};

export default General;
