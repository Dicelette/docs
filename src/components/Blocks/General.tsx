
import { FC } from "react";

import { CheckBox, Section,Textfield } from "../Atoms";
import { translate } from "@docusaurus/Translate";

const General:FC = () => 
	<Section label="Général">
		<CheckBox 
			className="self-start !ml-0 -mt-2 mb-6" 
			label={translate({message: "Nom du personnage obligatoire"})} 
			name="isCharNameRequired"
			
		/>
		<Textfield label={translate({message: "Total"})} name="total" id="total" type="number" inputProps={{min: 0}} />
		<Textfield label={translate({message: "Dé principal"})} name="diceType" />
	</Section>;

export default General;
