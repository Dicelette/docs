
import { FC } from "react";

import { CheckBox, Section,Textfield } from "../Atoms";

const General:FC = () => 
	<Section label="Général">
		<CheckBox 
			className="self-start !ml-0 -mt-2 mb-6" 
			label="Rendre le nom du personnage obligatoire" 
			name="isCharNameRequired"
			
		/>
		<Textfield label="Total (facultatif)" name="total" id="total" type="number" inputProps={{min: 0}} />
		<Textfield label="Dé majeur (facultatif)" name="diceType" />
	</Section>;

export default General;
