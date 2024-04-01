import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";
import { FC } from "react";

type AddButtonProps = {
    onClick: () => void;
}

const AddButton: FC<AddButtonProps> = ({onClick}) => <IconButton onClick={onClick} size="small"><AddCircleOutline/></IconButton>;

export default AddButton;