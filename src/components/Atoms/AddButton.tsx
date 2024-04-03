import { IconButton } from "@mui/material";
import { FC } from "react";
import { Icon } from '@iconify/react';

type AddButtonProps = {
    onClick: () => void;
}

const AddButton: FC<AddButtonProps> = ({onClick}) => <IconButton onClick={onClick} size="small" className="manage-button"><Icon icon="fluent:add-circle-12-regular" height="20" /></IconButton>;

export default AddButton;