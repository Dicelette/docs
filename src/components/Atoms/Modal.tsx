import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { FC } from "react";

type ModalProps = {
    children: React.ReactNode;
    onCancel: () => void;
    title: string;
}

const Modal: FC<ModalProps> = ({ children, onCancel, title }) => 
	<Dialog open>
		<DialogTitle>{title}</DialogTitle>
		<DialogContent>{children}</DialogContent>
		<DialogActions>
			<Button onClick={onCancel}>Annuler</Button>
			<Button variant="contained">OK</Button>
		</DialogActions>
	</Dialog>;

export default Modal;