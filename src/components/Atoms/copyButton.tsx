import ContentCopy from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";
import { FC } from "react";

type CopyButtonProps = {
    onClick: () => void;
}

const CopyButton: FC<CopyButtonProps> = ({onClick}) => <IconButton onClick={onClick} size="small"><ContentCopy/></IconButton>;

export default CopyButton;