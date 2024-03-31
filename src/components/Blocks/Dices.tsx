
import { ErrorMessage, Field, FieldArray } from "formik";

import { Section } from "../Atoms";
import CopyButton from "../Atoms/copyButton";
import RemoveButton from "../Atoms/removeButton";



const Dices = ({values}) => {
	return (
		<div className="statistic">
			<FieldArray name="damages">
				{({ push, remove }) => (
					<div>
						<Section label="Dés" onAdd={() => push({ name: "", value: "" })} children={""} />
						<table>
							<tr>
								<th>Nom</th>
								<th>Valeur</th>
								<th colSpan={2}></th>
							</tr>
							{values.damages.map((_, index) => (
								<tr key={index}>
									<td>
										<Field name={`damages[${index}].name`}/>
										<ErrorMessage name={`damages[${index}].name`}/>
									</td>
									<td>
										<Field name={`damages[${index}].value`}/>
									</td>
									
									
									<td colSpan={2}>
										<RemoveButton onClick={() => remove(index)}/>
										<CopyButton onClick={() => {push(values.damages[index]);}}/>
									</td>
								</tr>
							))}
						</table>
					</div>
				)}
			</FieldArray>
						
		</div>
	);
};

export default Dices;