import { Tooltip as ReactTooltip } from "react-tooltip";

import { Critical } from "../../@core/core/interface";
import { Section, Textfield } from "../Atoms";



function toolTipOnCondition(values: Critical) {
	if (values.failure === values.success) {
		return (
			<ReactTooltip id="critical" anchorSelect="#critical" content="Les deux valeurs ne peuvent être identiques" style={{background: "var(--rt-color-error)"}}/>
		);
	} else if (values.failure < 1) {
		return (
			<ReactTooltip id="critical" anchorSelect=".failure" content="La valeur ne peut pas être inférieure à 1" style={{background: "var(--rt-color-error)"}}/>
		);
	} else if (values.success < 1) {
		return (
			<ReactTooltip id="critical" anchorSelect=".success" content="La valeur ne peut pas être inférieure à 1" style={{background: "var(--rt-color-error)"}}/>
		);
	}
}

function errorClass(values: Critical) {
	if (values.failure === values.success) {
		return "error";
	} else if (values.failure < 1 || values.success < 1) {
		return "error";
	} else {
		return "";
	}
}

const CriticalValue = ({critical}) => 
	<Section label="Critique">
		<Textfield label="Succès" name="critical.success" type="number" id="critical" className={`success ${errorClass(critical)}`}/>
		<Textfield label="Échec" name="critical.failure" type="number" id="critical" className={`failure ${errorClass(critical)}`}/>
		{toolTipOnCondition(critical)}
	</Section>;

export default CriticalValue;