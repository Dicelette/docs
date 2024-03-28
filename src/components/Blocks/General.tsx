import { FC } from "react";

import { CheckBox, Section,Textfield } from "../Atoms";

const General: FC = () => 
	<Section label="Général">
		<CheckBox 
			className="self-start !ml-0 -mt-2" 
			label="Rendre le nom du personnage obligatoire" 
			name="name" 
		/>
		<Textfield label="Total (facultatif)" name="diceType" />
		<Textfield label="Dé majeur (facultatif)" name="total" />
	</Section>;

export default General;
