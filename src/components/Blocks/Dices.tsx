
import { ErrorMessage, FieldArray } from "formik";

import { Section,Textfield  } from "../Atoms";
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
							
							{values.damages.map((_: unknown, index: number) => (
								<tr key={index}>
									<td>
										<Textfield name={`damages[${index}].name`} label="Nom" className="w-[200px] !mb-0"/>
										<ErrorMessage name={`damages[${index}].name`}/>
									</td>
									<td>
										<Textfield name={`damages[${index}].value`} label="Valeur" className="w-[200px] !mb-0" />
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