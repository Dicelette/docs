import { TextField, TextFieldProps } from "@mui/material";
import { Field, FieldProps } from "formik";
import { FC, HTMLInputTypeAttribute } from "react";

type TextfieldProps = TextFieldProps & {
	autofocus?: boolean
	className?: string
	name: string
	type?: HTMLInputTypeAttribute
}

const Textfield: FC<TextfieldProps> = (props) => {
	return (
		<Field name={props.name}>
			{({ field, form: { errors } }: FieldProps<number>) => {
				return (
					<TextField
						{...props}
						value={field.value}
						onChange={props.onChange ?? field.onChange}
						onBlur={field.onBlur}
						autoFocus={props.autoFocus}
						className={`!mb-4 w-[400px] ${props.className}`}
						error={errors[field.name] !== undefined}
						label={props.label}
						size="small"
						name={field.name}
						type={props.type}
						typeof={props.type}
					/>
				);
			}}
		</Field>
	);
};

export default Textfield;
