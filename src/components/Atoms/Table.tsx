/* eslint-disable @typescript-eslint/no-explicit-any */
import EditIcon from "@mui/icons-material/Edit";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { FC } from "react";

type GridProps = {
    headers: string[];
	data: any[];
	onEdit: (data: any) => void;
}

const Grid : FC<GridProps> = ({ headers, data, onEdit }) => {

	const mapObject = (obj: any) => typeof obj === "object"
		? Object.values(obj).map((v) => mapObject(v))
		: [<TableCell key={String(obj)}>{String(obj)}</TableCell>];

	return (
		<div className="mt-2">
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							{headers.map((label) => <TableCell key={label}>{label}</TableCell>)}
						</TableRow>
					</TableHead>
					<TableBody>
						{data?.map((row) => (
							<TableRow key={JSON.stringify(row)}>
								{Object.values(row).flatMap((value) => mapObject(value))}
								<TableCell>
									<Button size="small" onClick={onEdit}>
										<EditIcon/>
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Grid;