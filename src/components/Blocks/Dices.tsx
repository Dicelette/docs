import { Damage } from "@site/src/types/Template";
import { FC, useState } from "react";

import { Grid, Section } from "../Atoms";
import DiceModal from "../Modals/DiceModal";

type DicesProps = {
    dices: Damage[];
}


const Dices : FC<DicesProps> = ({dices}) => {
	const [showDialog, setShowDialog] = useState(false);
	const [editedValue, setEditedValue] = useState<Damage>({name: "", value: ""});
	const [internalValue, setInternalValue] = useState<Damage[]>(dices ?? []);

	const handleAdd= () => {
		setEditedValue({name: "", value: ""});
		setShowDialog(true);
	};

	const handleEdit= (data) => {
		setEditedValue({...data});
		setShowDialog(true);
	};

	const handleSave = (value: Damage) => {
		setShowDialog(false);
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
			<Section label="Dégâts" onAdd={handleAdd}>
				<Grid 
					headers={["Nom", "Valeur"]} 
					data={internalValue.map((v) => [v.name, v.value])}
					onDelete={(index) => {
						const newValues = [...internalValue];
						newValues.splice(index, 1);
						setInternalValue(newValues);
					}}
					onEdit={handleEdit}
					
				/>
				
			</Section>
			{showDialog && 
			<DiceModal 
				value={editedValue} 
				onCancel={() => setShowDialog(false)} 
				onSave={handleSave}
			/>}
		</>
	);

};
	
export default Dices;