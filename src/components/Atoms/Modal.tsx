import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { FC } from "react";

type ModalProps = {
    children: React.ReactNode;
    onCancel: () => void;
	onOk: () => void;
    title: string;
}

const Modal: FC<ModalProps> = ({ children, onCancel, onOk, title }) => 
	<Dialog open>
		<DialogTitle>{title}</DialogTitle>
		<DialogContent>{children}</DialogContent>
		<DialogActions>
			<Button onClick={onCancel}>Annuler</Button>
			<Button onClick={onOk} variant="contained">OK</Button>
		</DialogActions>
	</Dialog>;

export default Modal;