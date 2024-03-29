import { TextField } from '@mui/material'
import { Field, FieldProps } from 'formik'
import { FC, HTMLInputTypeAttribute } from 'react'

type TextfieldProps = {
	autofocus?: boolean
	className?: string
	label: string
	name: string
	type?: HTMLInputTypeAttribute
}

const Textfield: FC<TextfieldProps> = ({
	autofocus,
	className,
	label,
	name,
	type = 'text',
}) => {
	return (
		<Field name={name}>
			{({ field, form: { errors } }: FieldProps<number>) => {
				return (
					<TextField
						value={field.value}
						onChange={field.onChange}
						onBlur={field.onBlur}
						autoFocus={autofocus}
						className={`!mb-4 w-[400px] ${className}`}
						error={errors[field.name] !== undefined}
						label={label}
						size="small"
						name={field.name}
						type={type}
						typeof={type}
					/>
				)
			}}
		</Field>
	)
}

export default Textfield
