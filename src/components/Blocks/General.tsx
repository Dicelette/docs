import { Tooltip as ReactTooltip } from "react-tooltip";

import { CheckBox, Section,Textfield } from "../Atoms";

const General = ({total}) => 
	<Section label="Général">
		<CheckBox 
			className="self-start !ml-0 -mt-2" 
			label="Rendre le nom du personnage obligatoire" 
			name="isCharNameRequired" 
		/>
		<Textfield label="Total (facultatif)" name="total" id="total" type="number" className={`${total < 0 ? "error" : ""}`} />
		{(total <0 && <ReactTooltip id="total" anchorSelect="#total" content="La valeur ne peut pas être inférieure à 0" style={{background: "var(--rt-color-error)"}}/>)}
		<Textfield label="Dé majeur (facultatif)" name="diceType" />
	</Section>;

export default General;
