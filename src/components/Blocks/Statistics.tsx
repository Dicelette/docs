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
		setInternalValue([ ...statistics, value ]);
		setShowDialog(false);
	};

	return (
		<>
			<Section label="Statistiques" hasAddButton onAdd={handleAdd}>
				<Grid 
					headers={["Nom", "Valeur minimale", "Valeur maximale", "Ou Combinaison", ""]} 
					data={internalValue} 
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