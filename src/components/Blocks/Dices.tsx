
import { ErrorMessage, FieldArray } from "formik";
import { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { Section,Tablefield  } from "../Atoms";
import CopyButton from "../Atoms/copyButton";
import RemoveButton from "../Atoms/removeButton";
import {translate} from "@docusaurus/Translate";


const Dices = ({values}) => {

	const [duplicateIndices, setDuplicateIndices] = useState([]);

	useEffect(() => {
		const findDuplicates = () => {
			const duplicates = [];
			values.damages.forEach((stat, index) => {
				const isDuplicate = values.damages.findIndex((s, i) => i !== index && s.name === stat.name);
				if (isDuplicate !== -1 && !duplicates.includes(index)) {
					duplicates.push(index);
					duplicates.push(isDuplicate);
				}
			});
			setDuplicateIndices(duplicates);
		};
		findDuplicates();
	}, [values.damages]);

	const errorTooltip = (index: number) => {
		if (duplicateIndices.includes(index)) {
			return (
				<ReactTooltip id={`Nom-${index}`} 
					content={translate({message: "Ce nom est déjà utilisé"})} 
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Nom-${index}`}/>
			);
		}
		else if (values.damages[index].name.length === 0) {
			return (
				<ReactTooltip id={`Nom-${index}`} 
					content={translate({message: "Le nom ne peut pas être vide"})}
					style={{background: "var(--rt-color-error)"}}
					anchorSelect={`#Nom-${index}`}/>
			);
		} else return null;
	};

	return (
		<div className="statistic">
			<FieldArray name="damages">
				{({ push, remove }) => (
					<div>
						<Section label={translate({message:"Dés"})} onAdd={() => push({ name: "", value: "" })} children={""} />
						<table className="w-full">
							<tbody className="divide-y block w-full">
								{values.damages.map((_: unknown, index: number) => (
									<tr key={index} className={`flex flex-col xl:flex-row items-start xl:w-full ${duplicateIndices.includes(index) ? "bg-rose-300" : ""}`}>
										<td className="p-px table-cell">
											<CopyButton onClick={() => {push({
												name: "",
												value: values.damages[index].value
											});}}/>
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield name={`damages[${index}].name`} label={translate({message:"Nom"})} className={`${values.damages[index].name.length === 0 ? "error" : ""}`} id={`Nom-${index}`}/>
											<ErrorMessage name={`damages[${index}].name`}/>
										</td>
										<td className="p-2 min-[0px]:max-xl:w-full">
											<Tablefield name={`damages[${index}].value`} label={translate({message:"Valeur"})} className={`${values.damages[index].name.length === 0 ? "error" : ""}`} id={`Value-${index}`}/>
										</td>
										{errorTooltip(index)}
										{(values.damages[index].name.length === 0 && <ReactTooltip id={`Value-${index}`} 
											content={translate({message: "La valeur ne peut pas être vide"})}
											style={{background: "var(--rt-color-error)"}}
											anchorSelect={`#Value-${index}`}/>)}
										
										<td className="p-px table-cell">
											<RemoveButton onClick={() => remove(index)}/>
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