import { FC } from "react";

import { Section, Textfield } from "../Atoms";

const CriticalValue: FC = () => 
	<Section label="Critique">
		<Textfield label="Succès" name="critical.success" type="number" />
		<Textfield label="Échec" name="critical.failure" type="number" />
	</Section>;

export default CriticalValue;