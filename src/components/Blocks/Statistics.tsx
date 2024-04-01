
import { ErrorMessage, FieldArray } from "formik";
import { useEffect,useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { Section, Tablefield } from "../Atoms";
import CopyButton from "../Atoms/copyButton";
import RemoveButton from "../Atoms/removeButton";


const Statistics = ({values}) => {
	const [duplicateIndices, setDuplicateIndices] = useState([]);

	useEffect(() => {
		const findDuplicates = () => {
			const duplicates = [];
			values.statistics.forEach((stat, index) => {
				const isDuplicate = values.statistics.findIndex((s, i) => i !== index && s.name === stat.name);
				if (isDuplicate !== -1 && !duplicates.includes(index)) {
					duplicates.push(index);
					duplicates.push(isDuplicate);
				}
			});
			setDuplicateIndices(duplicates);
		};
		findDuplicates();
	}, [values.statistics]);


	return (
		<div className="statistic">
			<FieldArray name="statistics">
				{({ push, remove }) => (
					<div>
						<Section label="Statistiques" onAdd={() => push({ name: "", values: { min: 0, max: 0, combinaison: "" } })} children={""} />
						<table className="w-full">
							<tbody className="divide-y block w-full">
								{values.statistics.map((_, statIndex) => (
									<tr key={statIndex}  className={`
										flex flex-col xl:flex-row items-start xl:w-full ${duplicateIndices.includes(statIndex) ? "bg-rose-300" : ""}`}>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield label="Nom" name={`statistics[${statIndex}].name`} id={`Nom-${statIndex}`} data-tooltip-variant="error" />
											<ErrorMessage name={`statistics[${statIndex}].name`}/>
											{(duplicateIndices.includes(statIndex) && 
												<ReactTooltip id={`Nom-${statIndex}`} 
													content="Valeur dupliquée" 
													style={{background: "var(--rt-color-error)"}}
													anchorSelect={`#Nom-${statIndex}`}/>)}
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield type="number" name={`statistics[${statIndex}].min`}
												label="Min"
												className={`xl:w-[100px] ${values.statistics[statIndex].min && values.statistics[statIndex].max && values.statistics[statIndex].min > values.statistics[statIndex].max ? "error" : ""}`}
												id={`Min-${statIndex}`}
												data-tooltip-variant="error"
												disabled={!!values.statistics[statIndex].combinaison}/>
											{(values.statistics[statIndex].min && values.statistics[statIndex].max) && values.statistics[statIndex].min > values.statistics[statIndex].max && 
												<ReactTooltip id={`Min-${statIndex}`}
													content="La valeur minimale ne peut pas être supérieure à la valeur maximale" 
													style={{background: "var(--rt-color-error)"}}
													anchorSelect={`#Min-${statIndex}`}/>}	
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield type="number" name={`statistics[${statIndex}].max`}
												label="Max"
												className="xl:w-[100px] ${}"
												disabled={!!values.statistics[statIndex].combinaison}
											/>
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield
												label="Combinaison"
												name={`statistics[${statIndex}].combinaison`}
												disabled={!!(values.statistics[statIndex].min || values.statistics[statIndex].max)}
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