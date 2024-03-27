import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface Template {
	charName: boolean;
	statistics?: {
		[name: string]: {
			min: number;
			max: number;
			combinaison: string;
		};
	};
	total: number;
	diceType: string;
	critical: {
		success: number;
		failure: number;
	};
	damage?: {
		[name: string]: string;
	};
}

interface TemplateForm {
	charName: boolean;
	statistics: {
		name: string;
		min: number;
		max: number;
		combinaison: string;
	}[];
	total: number;
	diceType: string;
	critical: {
		success: number;
		failure: number;
	};
	damage: {
		name: string;
		value: string;
	}[];
}

const StatisticalTemplateForm: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const downloadJSON = (data: TemplateForm) => {
		const parseStats = (stats: { name: string; min: number; max: number; combinaison: string }[]) => {
			const parsedStats: { [name: string]: { min: number; max: number; combinaison: string } } = {};
			stats.forEach(stat => {
				parsedStats[stat.name] = {
					min: stat.min,
					max: stat.max,
					combinaison: stat.combinaison,
				};
			});
			return parsedStats;
		};
		const parseDamage = (damage: { name: string; value: string }[]) => {
			const parsedDamage: { [name: string]: string } = {};
			damage.forEach(dmg => {
				parsedDamage[dmg.name] = dmg.value;
			});
			return parsedDamage;
		};
		const template: Template =
			{
				charName: data.charName,
				statistics: parseStats(data.statistics),
				total: data.total,
				diceType: data.diceType,
				critical: data.critical,
				damage: parseDamage(data.damage),
			};

		const blob = new Blob([JSON.stringify(template, null, 2)], {
			type: "application/json",
		});
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "statisticalTemplate.json";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const uniqueNames = (stats: any[]) => {
		const names = stats.map(stat => stat.name);
		const unique = new Set(names);

		return names.length === unique.size;
	};
	return (
		<div>
			<Formik
				initialValues={{
					charName: false,
					statistics: [],
					total: 0,
					diceType: "",
					critical: { success: 0, failure: 0 },
					damage: [],
				}}
				validationSchema={Yup.object({
					total: Yup.number().min(0),
					diceType: Yup.string(),
					critical: Yup.object().shape({
						success: Yup.number(),
						failure: Yup.number(),
					}),
					statistics: Yup.array().of(
						Yup.object().shape({
							name: Yup.string().required("Required"),
							min: Yup.number(),
							max: Yup.number(),
							combinaison: Yup.string(),
						})
					).test("unique-names", "Les noms des statistiques doivent être uniques", uniqueNames),
					damage: Yup.array().of(
						Yup.object().shape({
							name: Yup.string().required("Required"),
							value: Yup.string().required("Required"),
						})
					),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						downloadJSON(values);
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting, values }) => (
					<Form>
						<div className="group-other">
							<div className="diceTotal">
								<h2> Général </h2>
								<div>
									<label htmlFor="charName">Rendre le nom du personnage obligatoire </label>
									<Field name="charName" type="checkbox" />
									<ErrorMessage name="charName" />
								</div>
								<div>
									<label htmlFor="total">Total (facultatif) : </label>
									<Field name="total" type="number" />
									<ErrorMessage name="total" />
								</div>

								<div>
									<label htmlFor="diceType">Dé majeur (facultatif) : </label>
									<Field name="diceType" type="text" />
									<ErrorMessage name="diceType" />
								</div>
							</div>
							<br />
							<div className="critical">
								<h3> Valeur critique </h3>
								<div>
									<label htmlFor="critical.success">Succès : </label>
									<Field name="critical.success" type="number" />
									<ErrorMessage name="critical.success" />
								</div>
								<div>
									<label htmlFor="critical.failure">Échec : </label>
									<Field name="critical.failure" type="number" />
									<ErrorMessage name="critical.failure" />
								</div>
							</div>
						</div>
						<br />
						<div className="statistic">
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
										{({ push: pushStat, remove: removeStat }) => (
											<>
												{values.statistics.map((_, statIndex) => (
													<tr key={statIndex}>
														<td>
															<Field name={`statistics[${statIndex}].name`}/>
															<ErrorMessage name={`statistics[${statIndex}].name`}/>
														</td>
														<td>
															<Field name={`statistics[${statIndex}].min`}
																disabled={values.statistics[statIndex].combinaison}/>
														</td>
														<td>
															<Field name={`statistics[${statIndex}].max`}
																disabled={values.statistics[statIndex].combinaison}
															/>
														</td>
														<td>
															<Field
																name={`statistics[${statIndex}].combinaison`}
																disabled={values.statistics[statIndex].min || values.statistics[statIndex].max}
																aria-invalid={values.statistics[statIndex].min || values.statistics[statIndex].max}
																aria-label={`Combinaison de ${values.statistics[statIndex].name}`}
																invalid={values.statistics[statIndex].min || values.statistics[statIndex].max}
															/>
														</td>
														<td>
															<button
																type="button"
																onClick={() => removeStat(statIndex)}
															>
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
														<button type="button" onClick={() => pushStat({})}>
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
						</div>
						<br />
						<div className="dice-skill">
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
										{({ push: pushDamage, remove: removeDamage }) => (
											<>
												{values.damage.map((_, damageIndex) => (
													<tr key={damageIndex}>
														<td>
															<Field name={`damage[${damageIndex}].name`} />
														</td>
														<td>
															<Field name={`damage[${damageIndex}].value`} />
														</td>
														<td>
															<button
																type="button"
																onClick={() => removeDamage(damageIndex)}
															>
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
														<button type="button" onClick={() => pushDamage({})}>
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
						</div>

						<button type="submit" disabled={isSubmitting} className="submit">
							Télécharger le JSON
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default StatisticalTemplateForm;
