import { TextField } from "@mui/material";
import { Field, FieldProps } from "formik";
import { FC, HTMLInputTypeAttribute } from "react";

type TextfieldProps = {
  autofocus?: boolean;
  className?: string;
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
};

const Textfield: FC<TextfieldProps> = ({ autofocus, className, label, name, type = "text" }) => {
	return (
		<Field
			name={name}
			render={({ field, form: { errors } }: FieldProps<number>) => {
				return (
					<TextField
						autoFocus={autofocus}
						className={`!mb-4 w-[400px] ${className}`}
						error={errors[field.name] !== undefined}
						label={label}
						size="small"
						type={type}
					/>
				);
			}}
		/>
	);
};

export default Textfield;
