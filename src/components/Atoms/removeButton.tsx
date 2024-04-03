import { translate } from "@docusaurus/Translate";
import { Icon } from "@iconify/react";
import { IconButton } from "@mui/material";
import { FC } from "react";

type RemoveButtonProps = {
    onClick: () => void;
}

const RemoveButton: FC<RemoveButtonProps> = ({onClick}) => <IconButton onClick={onClick} className="manage-button !p-px relative xl:top-2.5 min-[0px]:max-xl:w-full" title={translate({message: "Supprimer ce champ"})} aria-label={translate({message: "Supprimer ce champ"})}><Icon icon="lucide:delete" height="24" className="delete-button"/></IconButton>;

export default RemoveButton;