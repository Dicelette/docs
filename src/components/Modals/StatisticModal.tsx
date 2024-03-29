import { Box } from "@mui/material";
import { Statistic } from "@site/src/types/Template";
import { FC, useState } from "react";

import { Modal, Textfield } from "../Atoms";

type StatisticModalProps = {
  onCancel: () => void;
  onSave: (value: Statistic) => void;
  value: Statistic;
};

const StatisticModal: FC<StatisticModalProps> = ({ onCancel, onSave, value }) => {
	const [nameError, setNameError] = useState(false);
	const [minError, setMinError] = useState(false);
	const [maxError, setMaxError] = useState(false);
	const [combinaisonError, setCombinaisonError] = useState(false);
	const [internalValue, setInternalValue] = useState<Statistic>(value);

	const handleSave = () => {
		if(validate()){
			onSave(internalValue);
		}
	};

	const validate = (): boolean => {
		if(!internalValue.name || internalValue.name.trim() === "") {
			setNameError(true);
		}

		const hasCombinaison = internalValue.values.combinaison !== "";        

		if(!hasCombinaison) {
			if(internalValue.values.min === 0) {
				setMinError(true);
			}
			if(internalValue.values.max === 0) {
				setMaxError(true);
			}
		}
		else{
			setCombinaisonError(true);
		}

		return !nameError && !minError && !maxError && !combinaisonError;
	};

	return (
		<Modal
			title="Ajouter une statistique"
			onCancel={onCancel}
			onOk={handleSave}>
			<Box className="flex flex-col pt-2" component='form' noValidate>
				<Textfield
					autofocus
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
					disabled={internalValue.values.combinaison !== ""}
					error={minError}
					helperText={minError && "Champ requis"}
					label="Valeur minimale"
					name="min"
					type="number"
					value={internalValue.values.min}
					onChange={(evt) => {
						setInternalValue({ ...internalValue, values: { ...internalValue.values, min: Number(evt.target.value) } });
						setMinError(false);
					}}
				/>
				<Textfield
					disabled={internalValue.values.combinaison !== ""}
					error={maxError}
					helperText={maxError && "Champ requis"}
					label="Valeur maximale"
					name="max"
					type="number"
					value={internalValue.values.max}
					onChange={(evt) => {
						setInternalValue({ ...internalValue, values: { ...internalValue.values, max: Number(evt.target.value) } });
						setMaxError(false);
					}}
				/>
				<Textfield
					disabled={internalValue.values.min !== 0 || internalValue.values.max !== 0}
					error={combinaisonError}
					helperText={combinaisonError && "Champ requis"}
					label="Combinaison"
					name="combinaison"
					value={internalValue.values.combinaison}
					onChange={(evt) => {
						setInternalValue({ ...internalValue, values: { ...internalValue.values, combinaison: evt.target.value } });
						setCombinaisonError(false);
					}}
				/>
			</Box>
		</Modal>
	);
};

export default StatisticModal;
