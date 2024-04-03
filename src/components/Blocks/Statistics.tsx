
import { ErrorMessage, FieldArray } from "formik";
import { useEffect,useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { Section, Tablefield } from "../Atoms";
import CopyButton from "../Atoms/copyButton";
import RemoveButton from "../Atoms/removeButton";
import { translate } from "@docusaurus/Translate";


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

	const minimalErrorToolTip = (index: number) => {
		if (!values.statistics[index].min) return;
		if (values.statistics[index].min && values.statistics[index].max && values.statistics[index].min > values.statistics[index].max) {
			return (
				<ReactTooltip id={`Min-${index}`}
					content={translate({message: "La valeur minimale ne peut pas être supérieure à la valeur maximale"})}
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Min-${index}`}/>
			);
		} else if (values.statistics[index].min < 0) {
			return (
				<ReactTooltip id={`Min-${index}`}
					content={translate({message: "La valeur minimale ne peut pas être négative"})}
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Min-${index}`}/>
			);
		} else if (isNaN(parseInt(values.statistics[index].min, 10))) {
			return (
				<ReactTooltip id={`Min-${index}`}
					content={translate({message: "La valeur minimale doit être un nombre"})}
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Min-${index}`}/>
			);
		}
		else return null;
	};

	const maximalErrorTollTip=(index: number) => {
		if (!values.statistics[index].max) return;
		if (values.statistics[index].min && values.statistics[index].max && values.statistics[index].min > values.statistics[index].max) {
			return (
				<ReactTooltip id={`Max-${index}`}
					content={translate({message: "La valeur maximale ne peut pas être inférieure à la valeur minimale" })}
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Max-${index}`}/>
			);
		} else if (values.statistics[index].max < 0) {
			return (
				<ReactTooltip id={`Max-${index}`}
					content={translate({message: "La valeur maximale ne peut pas être négative" })}
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Max-${index}`}/>
			);
		} else if (isNaN(parseInt(values.statistics[index].max, 10))) {
			return (
				<ReactTooltip id={`Max-${index}`}
					content={translate({message: "La valeur maximale doit être un nombre" })}
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Max-${index}`}/>
			);
		}
		else return null;
	};

	const minimalErrorClass = (index: number) => {
		if (!values.statistics[index].min) return;
		console.log(values.statistics[index].min, values.statistics[index].max);
		if (values.statistics[index].min && values.statistics[index].max && values.statistics[index].min > values.statistics[index].max) {
			return "error";
		} else if (values.statistics[index].min < 0) {
			return "error";
		} else if (isNaN(parseInt(values.statistics[index].min, 10))) {
			return "error";
		}
		else return "";
	};

	const maximalErrorClass = (index: number) => {
		if (!values.statistics[index].max) return;
		if (values.statistics[index].min && values.statistics[index].max && values.statistics[index].min > values.statistics[index].max) {
			return "error";
		} else if (values.statistics[index].max < 0) {
			return "error";
		} else if (isNaN(parseInt(values.statistics[index].max, 10))) {
			return "error";
		}
		else return "";
	};

	const nameErrorToolTip = (index: number) => {
		if (values.statistics[index].name.length === 0) {
			return (
				<ReactTooltip id={`Nom-${index}`} 
					content={translate({message: "Le nom ne peut pas être vide"})}
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Nom-${index}`}/>
			);
		} else if (duplicateIndices.includes(index)) {
			return (
				<ReactTooltip id={`Nom-${index}`} 
					content={translate({message: "Ce nom est déjà utilisé"})}
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Nom-${index}`}/>
			);
		} else return null;
	};

	const nameErrorClass = (index: number) => {
		if (values.statistics[index].name.length === 0) {
			return "error";
		}
	};

	return (
		<div className="statistic">
			<FieldArray name="statistics">
				{({ push, remove }) => (
					<div>
						<Section label={translate({message: "Statistiques"})} onAdd={() => push({ name: "", values: { min: 0, max: 0, combinaison: "" } })} children={""} />
						<table className="w-full">
							<tbody className="divide-y block w-full">
								{values.statistics.map((_, statIndex) => (
									<tr key={statIndex}  className={`
										flex flex-col xl:flex-row items-start xl:w-full ${statIndex === 0 ? "border-t-0" : ""}  ${duplicateIndices.includes(statIndex) ? "bg-rose-300" : ""} xl:h-18`} >
										<td className="p-px table-cell">
											<CopyButton onClick={() => {push({
												name: "",
												values: values.statistics[statIndex].values
											});}}/>
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield label={translate({message: "Nom"})} name={`statistics[${statIndex}].name`} id={`Nom-${statIndex}`} 
												className={`${nameErrorClass(statIndex)}`}
												data-tooltip-variant="error" />
											<ErrorMessage name={`statistics[${statIndex}].name`}/>
											{nameErrorToolTip(statIndex)}
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield type="number" inputProps={{min: 0}} name={`statistics[${statIndex}].min`}
												label={translate({message: "Min"})}
												className={`xl:w-[100px] ${minimalErrorClass(statIndex)}`}
												id={`Min-${statIndex}`}
												data-tooltip-variant="error"
												disabled={!!values.statistics[statIndex].combinaison}/>
											{minimalErrorToolTip(statIndex)}	
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield type="number" inputProps={{min: 0}} name={`statistics[${statIndex}].max`}
												label={translate({message: "Max"})}
												id={`Max-${statIndex}`}
												className={`xl:w-[100px] ${maximalErrorClass(statIndex)}`}
												disabled={!!values.statistics[statIndex].combinaison}
											/>
											{maximalErrorTollTip(statIndex)}
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield
												label={translate({message: "Combinaison"})}
												name={`statistics[${statIndex}].combinaison`}
												disabled={!!(values.statistics[statIndex].min || values.statistics[statIndex].max)}
											/>
										</td><td className="p-px table-cell">
											<RemoveButton onClick={() => remove(statIndex)}/>
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