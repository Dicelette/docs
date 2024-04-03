import { IconButton } from "@mui/material";
import { Icon } from '@iconify/react';
import { FC } from "react";
import { translate } from "@docusaurus/Translate";

type CopyButtonProps = {
    onClick: () => void;
}

const CopyButton: FC<CopyButtonProps> = ({onClick}) => <IconButton onClick={onClick} size="small" className="manage-button !p-px relative xl:top-2.5 min-[0px]:max-xl:w-full" aria-label={translate({message: "Dupliquer ce champ"})} title={translate({message: "Dupliquer ce champ"})} ><Icon icon="system-uicons:duplicate" height="24" className="copy-button"/></IconButton>;

export default CopyButton;