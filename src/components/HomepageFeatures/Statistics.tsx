import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Character } from "@site/src/types/Template";
import { ErrorMessage,Field, FieldArray } from "formik";
import { FC } from "react";

type StatisticsProps = {
    characters: Character[];
}

const Statistics : FC<StatisticsProps> = ({characters}) => { 
	return <div className="statistic">
		<h2>Statistiques</h2>
		<table>
			<thead>
				<tr>
					<th>Nom</th>
					<th>Valeur minimale</th>
					<th>Valeur maximale</th>
					<th>Ou Combinaison</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<FieldArray name="statistics">
					{({ push, remove }) => (
						<>
							{characters.map((character, index) => (
								<tr key={character.name}>
									<td>
										<Field name={character.name} />
										<ErrorMessage name={character.name} />
									</td>
									<td>
										<Field
											name={character.statistics.min}
											disabled={character.statistics.combinaison}
										/>
									</td>
									<td>
										<Field
											name={character.statistics.max}
											disabled={character.statistics.combinaison}
										/>
									</td>
									<td>
										<Field
											name={character.statistics.combinaison}
											disabled={character.statistics.min || character.statistics.max}
											aria-invalid={character.statistics.min || character.statistics.max}
											aria-label={`Combinaison de ${character.name}`}
											invalid={character.statistics.min || character.statistics.max}
										/>
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
								<td colSpan={5}>
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

export default Statistics;