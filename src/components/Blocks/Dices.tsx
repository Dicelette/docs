
import { ErrorMessage, FieldArray } from "formik";

import { Section,Tablefield  } from "../Atoms";
import CopyButton from "../Atoms/copyButton";
import RemoveButton from "../Atoms/removeButton";



const Dices = ({values}) => {
	return (
		<div className="statistic">
			<FieldArray name="damages">
				{({ push, remove }) => (
					<div>
						<Section label="Dés" onAdd={() => push({ name: "", value: "" })} children={""} />
						<table className="w-full">
							<tbody className="divide-y block w-full">
								{values.damages.map((_: unknown, index: number) => (
									<tr key={index} className="flex flex-col xl:flex-row items-start xl:w-full">
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield name={`damages[${index}].name`} label="Nom" />
											<ErrorMessage name={`damages[${index}].name`}/>
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield name={`damages[${index}].value`} label="Valeur" />
										</td>
										<td colSpan={2}>
											<RemoveButton onClick={() => remove(index)}/>
											<CopyButton onClick={() => {push(values.damages[index]);}}/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</FieldArray>
						
		</div>
	);
};

export default Dices;