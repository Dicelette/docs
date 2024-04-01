
import { ErrorMessage, FieldArray } from "formik";

import { Section, Tablefield } from "../Atoms";
import CopyButton from "../Atoms/copyButton";
import RemoveButton from "../Atoms/removeButton";



const Statistics = ({values}) => {
	return (
		<div className="statistic">
			<FieldArray name="statistics">
				{({ push, remove }) => (
					<div>
						<Section label="Statistiques" onAdd={() => push({ name: "", values: { min: 0, max: 0, combinaison: "" } })} children={""} />
						<table className="w-full">
							<tbody className="divide-y block w-full">
								{values.statistics.map((_, statIndex) => (
									<tr key={statIndex}  className="flex flex-col xl:flex-row items-start xl:w-full">
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield label="Nom" name={`statistics[${statIndex}].name`} />
											<ErrorMessage name={`statistics[${statIndex}].name`}/>
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield type="number" name={`statistics[${statIndex}].min`}
												label="Min"
												className="xl:w-[100px]"
												disabled={values.statistics[statIndex].combinaison}/>
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield type="number" name={`statistics[${statIndex}].max`}
												label="Max"
												className="xl:w-[100px]"
												disabled={values.statistics[statIndex].combinaison}
											/>
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield
												label="Combinaison"
												name={`statistics[${statIndex}].combinaison`}
												disabled={values.statistics[statIndex].min || values.statistics[statIndex].max}
												aria-invalid={values.statistics[statIndex].min || values.statistics[statIndex].max}
												aria-label={`Combinaison de ${values.statistics[statIndex].name}`}
											/>
										</td>
										<td colSpan={2}>
											<RemoveButton onClick={() => remove(statIndex)}/>
											<CopyButton onClick={() => {push({
												name: "",
												values: values.statistics[statIndex].values
											});}}/>
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

export default Statistics;