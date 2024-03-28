import { Damage } from "@site/src/types/Template";
import { FC } from "react";

import { Grid, Section } from "../Atoms";

type DicesProps = {
    dices: Damage[];
}

const Dices : FC<DicesProps> = () =>
	<Section label="Dés types (facultatif)" hasAddButton>
		<Grid headers={["Nom", "Dés"]} />
	</Section>;

export default Dices;