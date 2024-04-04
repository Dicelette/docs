import { translate } from "@docusaurus/Translate";
import { Icon } from "@iconify/react";
import { Button, IconButton, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";

type RemoveButtonProps = {
    onClick: () => void;
    size: number;
}

const RemoveIconButton = ({onClick, size}) => {
    const sizeClass= size === 1280 ? "xl" : "2xl";
    return (
        <Tooltip title={translate({message: "Supprimer ce champ"})} classes={{popper: "remove"}} arrow>   
        <IconButton onClick={onClick} size="small" className={`manage-button !p-px relative top-2.5 min-[0px]:max-${sizeClass}:w-full`} 
            aria-label={translate({message: "Supprimer ce champ"})} title={translate({message: "Supprimer ce champ"})} >
            <Icon icon="lucide:delete" height="24" className="delete-button"/>
        </IconButton></Tooltip> );
}

const RemoveTextButton = ({onClick, size}) =>{
    const sizeClass= size === 1280 ? "xl" : "2xl";
    return (
        <Button onClick={onClick} className={`!p-1 relative ${sizeClass}:top-2.5 min-[0px]:max-${sizeClass}:w-full delete-button`} variant="outlined" size="medium"
            aria-label={translate({message: "Supprimer ce champ"})} title={translate({message: "Supprimer ce champ"})} >
            <Icon icon="lucide:delete" height="24" className="delete-button text-button"/>
            {translate({message: "Supprimer"})}
        </Button>
    );}

const RemoveButton: FC<RemoveButtonProps> = ({onClick, size}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(size));
    return matches ? <RemoveTextButton onClick={onClick} size={size}/> : <RemoveIconButton onClick={onClick} size={size}/>;
}

export default RemoveButton;