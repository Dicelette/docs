import { Button, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Icon } from '@iconify/react';
import { FC } from "react";
import { translate } from "@docusaurus/Translate";

type CopyButtonProps = {
    onClick: () => void;
    size: number;
}

const CopyIconButton = ({onClick, size}) => {
    const sizeClass= size === 1280 ? "xl" : "2xl";
    return (    
        <IconButton onClick={onClick} size="small" className={`manage-button !p-px relative top-2.5 min-[0px]:max-${sizeClass}:w-full`} 
            aria-label={translate({message: "Dupliquer ce champ"})} title={translate({message: "Dupliquer ce champ"})} >
            <Icon icon="system-uicons:duplicate" height="24" className="copy-button"/>
        </IconButton>);
}

const CopyTextButton = ({onClick, size}) =>{
    const sizeClass= size === 1280 ? "xl" : "2xl";
    return (
        <Button onClick={onClick} className={`!p-1 relative ${sizeClass}:top-2.5 min-[0px]:max-${sizeClass}:w-full copy-button`} variant="outlined" size="medium"
            aria-label={translate({message: "Dupliquer ce champ"})} title={translate({message: "Dupliquer ce champ"})} >
            <Icon icon="system-uicons:duplicate" height="24" className="copy-button text-button"/>
            {translate({message: "Dupliquer"})}
        </Button>
    );}

const CopyButton: FC<CopyButtonProps> = ({onClick, size}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(size));
    return matches ? <CopyTextButton onClick={onClick} size={size}/> : <CopyIconButton onClick={onClick} size={size}/>;
}

export default CopyButton;