import { Box } from "@mui/material";
import { Damage } from "@site/src/types/Template";
import { FC, useState } from "react";

import { Modal, Textfield } from "../Atoms";

type DiceModalProps = {
  onCancel: () => void;
  onSave: (value: Damage) => void;
  value: Damage;
};

const DiceModal: FC<DiceModalProps> = ({ onCancel, onSave, value }) => {
	const [nameError, setNameError] = useState(false);
	
	const [internalValue, setInternalValue] = useState<Damage>(value);

	const handleSave = () => {
		if(validate()){
			onSave(internalValue);
		}
	};

	const validate = (): boolean => {
		if(!internalValue.name || internalValue.name.trim() === "") {
			setNameError(true);
		}
		return !nameError;
	};

	return (
		<Modal
			title="Ajouter une statistique"
			onCancel={onCancel}
			onOk={handleSave}>
			<Box className="flex flex-col pt-2" component='form' noValidate>
				
				<Textfield
					autoFocus
					error={nameError}
					helperText={nameError && "Champ requis"}
					label="Nom"
					name="name"
					value={internalValue.name}
					onChange={(evt) => {
						setInternalValue({ ...internalValue, name: evt.target.value }); 
						setNameError(false);
					}}
				/>
				
				<Textfield
					autoFocus
					error={nameError}
					helperText={nameError && "Champ requis"}
					label="Valeur"
					name="value"
					value={internalValue.value}
					onChange={(evt) => {
						setInternalValue({ ...internalValue, name: evt.target.value }); 
						setNameError(false);
					}}
				/>
			</Box>
		</Modal>
	);
};

export default DiceModal;
