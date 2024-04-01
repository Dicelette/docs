import Delete from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { FC } from "react";

type RemoveButtonProps = {
    onClick: () => void;
}

const RemoveButton: FC<RemoveButtonProps> = ({onClick}) => <IconButton onClick={onClick} size="small"><Delete/></IconButton>;

export default RemoveButton;