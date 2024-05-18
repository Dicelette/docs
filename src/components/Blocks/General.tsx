import { FC } from "react";

import { CheckBox, Section, Textfield } from "../Atoms";
import { translate } from "@docusaurus/Translate";
import { Tooltip as ReactTooltip } from "react-tooltip";

const General: FC = () => (
  <Section label="Général">
    <CheckBox
      className="self-start !ml-0 -mt-2"
      label={translate({ message: "Rendre obligatoire le nom du personnage" })}
      name="isCharNameRequired"
    />

    <CheckBox
      className="self-start !ml-0 -mt-2 mb-6"
      label={translate({ message: "Fiches privées" })}
      aria-label={translate({
        message: "Utilisée uniquement dans le CSV d'importation de fiche",
      })}
      name="isPrivate"
    />
    <ReactTooltip
      anchorSelect="#isPrivate"
      content={translate({
        message: "Utilisée uniquement dans le CSV d'importation de fiche",
      })}
    />
    <Textfield
      label={translate({ message: "Total" })}
      name="total"
      id="total"
      type="number"
      inputProps={{ min: 0 }}
    />
    <Textfield label={translate({ message: "Dé principal" })} name="diceType" />
  </Section>
);

export default General;
