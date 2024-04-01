
import { ErrorMessage, FieldArray } from "formik";

import { Section, Textfield } from "../Atoms";
import CopyButton from "../Atoms/copyButton";
import RemoveButton from "../Atoms/removeButton";



const Statistics = ({values}) => {
	return (
		<div className="statistic">
			<FieldArray name="statistics">
				{({ push, remove }) => (
					<div>
						<Section label="Statistiques" onAdd={() => push({ name: "", values: { min: 0, max: 0, combinaison: "" } })} children={""} />
						<table>
							
							{values.statistics.map((_, statIndex) => (
								<tr key={statIndex}>
									<td>
										<Textfield label="Nom" name={`statistics[${statIndex}].name`} className="w-[200px] !mb-0"/>
										<ErrorMessage name={`statistics[${statIndex}].name`}/>
									</td>
									<td>
										<Textfield type="number" name={`statistics[${statIndex}].min`}
											label="Min"
											className="w-[100px] !mb-0"
											disabled={values.statistics[statIndex].combinaison}/>
									</td>
									<td>
										<Textfield type="number" name={`statistics[${statIndex}].max`}
											label="Max"
											className="w-[100px] !mb-0"
											disabled={values.statistics[statIndex].combinaison}
										/>
									</td>
									<td>
										<Textfield
											className="w-[200px] !mb-0"
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
						</table>
					</div>
				)}
			</FieldArray>
						
		</div>
	);
};

export default Statistics;