import { Tooltip as ReactTooltip } from "react-tooltip";

import { Critical } from "../../@core/core/interface";
import { Section, Textfield } from "../Atoms";



function toolTipOnCondition(values: Critical) {
	if (values.failure === values.success) {
		return (
			<ReactTooltip id="critical" anchorSelect="#critical" content="Les deux valeurs ne peuvent être identiques" style={{background: "var(--rt-color-error)"}}/>
		);
	} else if (values.failure < 0) {
		return (
			<ReactTooltip id="critical" anchorSelect=".failure" content="La valeur ne peut pas être inférieure à 0" style={{background: "var(--rt-color-error)"}}/>
		);
	} else if (values.success < 0) {
		return (
			<ReactTooltip id="critical" anchorSelect=".success" content="La valeur ne peut pas être inférieure à 0" style={{background: "var(--rt-color-error)"}}/>
		);
	}
}

function errorClass(values: Critical, type: "failure" | "success") {
	if (values.failure === values.success) {
		return "error";
	} else if (type === "failure" && values.failure < 0 ) {
		return "error";
	} else if (type === "success" && values.success < 0) {
		return "error";
	} return "";
}

const CriticalValue = ({critical}) => 
	<Section label="Critique">
		<Textfield label="Succès" name="critical.success" type="number" id="critical" className={`success ${errorClass(critical, "success")}`} inputProps={{min: 0}} />
		<Textfield label="Échec" name="critical.failure" type="number" id="critical" className={`failure ${errorClass(critical, "failure")}`} inputProps={{min: 0}}/>
		{toolTipOnCondition(critical)}
	</Section>;

export default CriticalValue;