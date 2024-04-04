import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import { Icon } from '@iconify/react';
import { translate } from "@docusaurus/Translate";

type AddButtonProps = {
    len?: number;
    type?: "dice" | "stats"
    onClick: () => void;
}

const AddButton: FC<AddButtonProps> = ({len, type, onClick}) => {
    const maxLen = type === "dice" ? 25 : 20;
    const addLabel = type === "dice" ? translate({message: "Ajouter un dé"}) : translate({message: "Ajouter une statistique"});
    const maxLabel = translate({message: "Vous avez atteint le nombre maximum"})
    return (
        <Tooltip title={len > maxLen ? maxLabel : addLabel} arrow>
            <span><IconButton onClick={onClick} size="small" className="manage-button" disabled={len > maxLen}>
                <Icon icon="fluent:add-circle-12-regular" height="20" /></IconButton>
            </span></Tooltip>
    )};

export default AddButton;