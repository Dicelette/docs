import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Damage } from "@site/src/types/Template";
import { Field,FieldArray } from "formik";
import { FC } from "react";

type DicesProps = {
    dices: Damage[];
}

const Dices : FC<DicesProps> = ({dices}) => {
	return <div className="dice-skill">
		<h3>Dés types (facultatif)</h3>
		<table>
			<thead>
				<tr>
					<th>Nom</th>
					<th>Dés</th>
					<th> </th>
				</tr>
			</thead>
			<tbody>
				<FieldArray name="damage">
					{({ push, remove }) => (
						<>
							{dices.map((damage, index) => (
								<tr key={damage.name}>
									<td>
										<Field name={damage.name} />
									</td>
									<td>
										<Field name={damage.value} />
									</td>
									<td>
										<button
											type="button"
											onClick={() => remove(index)}>
											<FontAwesomeIcon
												icon="trash"
												fill="true"
												height="100"
												width="100"
											/>
										</button>
									</td>
								</tr>
							))}
							<tr>
								<td colSpan={3}>
									<button
										type="button"
										onClick={() => push({})}>
										<FontAwesomeIcon
											icon="plus"
											fill="true"
											height="100"
											width="100"
										/>
									</button>
								</td>
							</tr>
						</>
					)}
				</FieldArray>
			</tbody>
		</table>
	</div>;
};

export default Dices;