import { Character } from "@site/src/types/Template";
import { FC, useState } from "react";

import { Grid, Modal, Section, Textfield } from "../Atoms";

type StatisticsProps = {
    characters: Character[];
}

const Statistics : FC<StatisticsProps> = () => {
	const [showDialog, setShowDialog] = useState(false);

	return (
		<>
			<Section label="Statistiques" hasAddButton onAdd={() => setShowDialog(true)}>
				<Grid headers={["Nom", "Valeur minimale", "Valeur maximale", "Ou Combinaison"]} />
			</Section>
			{showDialog && 
			<Modal 
				title="Ajouter une statistique" 
				onCancel={() => setShowDialog(false)}
			>
				<div className="flex flex-col pt-2">
					<Textfield autofocus label="Nom" name="name" />
					<Textfield label="Valeur minimale" name="min" type="number" />
					<Textfield label="Valeur maximale" name="max" type="number" />
					<Textfield label="Combinaison" name="combinaison" />
				</div>
			</Modal>
			}
		</>
	);
};

export default Statistics;