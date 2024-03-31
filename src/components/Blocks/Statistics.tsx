
import { ErrorMessage, Field, FieldArray } from "formik";

import { Section } from "../Atoms";
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
							<tr>
								<th>Nom</th>
								<th>Min</th>
								<th>Max</th>
								<th>Combinaison</th>
								<th colSpan={2}>Actions</th>
							</tr>
							{values.statistics.map((_, statIndex) => (
								<tr key={statIndex}>
									<td>
										<Field name={`statistics[${statIndex}].name`}/>
										<ErrorMessage name={`statistics[${statIndex}].name`}/>
									</td>
									<td>
										<Field type="number" name={`statistics[${statIndex}].min`}
											disabled={values.statistics[statIndex].combinaison}/>
									</td>
									<td>
										<Field type="number" name={`statistics[${statIndex}].max`}
											disabled={values.statistics[statIndex].combinaison}
										/>
									</td>
									<td>
										<Field
											name={`statistics[${statIndex}].combinaison`}
											disabled={values.statistics[statIndex].min || values.statistics[statIndex].max}
											aria-invalid={values.statistics[statIndex].min || values.statistics[statIndex].max}
											aria-label={`Combinaison de ${values.statistics[statIndex].name}`}
											invalid={values.statistics[statIndex].min || values.statistics[statIndex].max}
										/>
									</td>
									<td colSpan={2}>
										<RemoveButton onClick={() => remove(statIndex)}/>
										<CopyButton onClick={() => {push(values.statistics[statIndex]);}}/>
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