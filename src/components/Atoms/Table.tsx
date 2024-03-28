import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { FC } from "react";

type GridProps = {
    headers: string[];
}

const Grid : FC<GridProps> = ({headers}) => {
	return (
		<div className="mt-2">
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							{headers.map((label) => <TableCell key={label}>{label}</TableCell>)}
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Grid;