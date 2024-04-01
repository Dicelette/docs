import { TextField, TextFieldProps } from "@mui/material";
import { Field, FieldProps } from "formik";
import { FC, HTMLInputTypeAttribute } from "react";

type TablefieldProps = TextFieldProps & {
	autoFocus?: boolean
	className?: string
	name: string
	type?: HTMLInputTypeAttribute
}

const Tablefield: FC<TablefieldProps> = (props) => {
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
						className={`xl:w-[200px] !mb-0 min-[0px]:max-xl:w-full ${props.className}`}
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

export default Tablefield;
