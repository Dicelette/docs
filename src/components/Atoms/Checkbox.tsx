import { Checkbox, FormControlLabel } from "@mui/material";
import { Field, FieldProps } from "formik";
import { FC } from "react";

type CheckboxProps= {
    className?: string;
    label: string;
    name: string;
}

const CheckBox: FC<CheckboxProps> = ({className,label,name}) => {
	return <Field
		name={name}
		render={({ field }: FieldProps<boolean>) => {
			return (
				<FormControlLabel
					className={className}
					control={
						<Checkbox
							aria-label={field.name}
							name={field.name}
						/>
					}
					labelPlacement="start"
					label={label}
				/>
			);
		}}
	/>;
};

export default CheckBox;