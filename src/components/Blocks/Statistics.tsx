import { Statistic } from "@site/src/types/Template";
import { FC, useState } from "react";

import { Grid, Section } from "../Atoms";
import StatisticModal from "../Modals/StatisticModal";

type StatisticsProps = {
    statistics: Statistic[];
}

const defaultValue: Statistic = {name: "", values: { min: 0, max: 0, combinaison: ""}};

const Statistics : FC<StatisticsProps> = ({statistics}) => {
	const [showDialog, setShowDialog] = useState(false);
	const [editedValue, setEditedValue] = useState<Statistic>(defaultValue);
	const [internalValue, setInternalValue] = useState<Statistic[]>(statistics ?? []);
	

	const handleAdd= () => {
		setEditedValue({...defaultValue});
		setShowDialog(true);
	};
	
	const handleEdit= (data) => {
		setEditedValue({...data});
		setShowDialog(true);
	};

	const handleSave = (value: Statistic) => {
		setShowDialog(false);
		//push the new value in the old value
		const newValues = [...internalValue];
		const index = newValues.findIndex((v) => v.name === value.name);
		if(index === -1){
			newValues.push(value);
		}
		else{
			newValues[index] = value;
		}
		setInternalValue(newValues);
	};

	return (
		<>
			<Section label="Statistiques" onAdd={handleAdd}>
				<Grid 
					headers={["Nom", "Combinaison", "Min", "Max"]} 
					data={internalValue.map((v) => [v.name, v.values.combinaison, v.values.min, v.values.max])}
					onDelete={(index) => setInternalValue(internalValue.filter((_, i) => i !== index))}
					onEdit={handleEdit}
					
				/>
				
			</Section>
			{showDialog && 
			<StatisticModal 
				value={editedValue} 
				onCancel={() => setShowDialog(false)} 
				onSave={handleSave}
			/>}
		</>
	);
};

export default Statistics;