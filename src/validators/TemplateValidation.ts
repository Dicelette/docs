import { array, boolean, number, object, string } from "yup";

import { Character, Critical, Damage, Statistics } from "../types/Template";

const uniqueNames = (characters: Character[]) => {
	const names = characters.map((stat) => stat.name);
	const unique = new Set(names);

	return names.length === unique.size;
};

export const templateValidator = object({
	charName: boolean().required(),
	characters: array<Character>().of(object<Character>({
		name: string().defined().required("Required"),
		statistics: object<Statistics>({
			min: number().required(),
			max: number().required(),
			combinaison: string().required(),
		})
	})).test("unique-names", "Les noms des statistiques doivent être uniques", uniqueNames),
	critical: object<Critical>().shape({
		success: number().required(),
		failure: number().required(),
	}),
	damages: array<Damage>().of(
		object<Damage>({
			name: string().required("Required"),
			value: string().required("Required"),
		})
	),
	diceType: string().required(),
	total: number().min(0).required(),
});