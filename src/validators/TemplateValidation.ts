import * as Yup from "yup";

import { Character } from "../types/Template";

const uniqueNames = (characters: Character[]) => {
	const names = characters.map((stat) => stat.name);
	const unique = new Set(names);

	return names.length === unique.size;
};

const templateValidator = Yup.object({
	total: Yup.number().min(0),
	diceType: Yup.string(),
	critical: Yup.object().shape({
		success: Yup.number(),
		failure: Yup.number(),
	}),
	statistics: Yup.array()
		.of(
			Yup.object().shape({
				name: Yup.string().required("Required"),
				min: Yup.number(),
				max: Yup.number(),
				combinaison: Yup.string(),
			})
		)
		.test("unique-names", "Les noms des statistiques doivent être uniques", uniqueNames),
	damage: Yup.array().of(
		Yup.object().shape({
			name: Yup.string().required("Required"),
			value: Yup.string().required("Required"),
		})
	),
});

export default templateValidator;