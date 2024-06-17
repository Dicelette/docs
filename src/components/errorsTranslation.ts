import {translate} from "@docusaurus/Translate";
import {
	DiceTypeError,
	FormulaError,
	MaxGreater,
	EmptyObjectError,
	TooManyDice,
	NoStatisticsError,
	TooManyStats,
} from "@dicelette/core";

/** Convert [error, errorcode] {errorMessageValue} to something readable */
export function errorCode(error: Error) {
	console.error(error);
	if (error instanceof DiceTypeError) {
		return translate({message: "Le dé \"{{x}}\" est invalide."}).replace("{{x}}", error.dice);
	}
	if (error instanceof FormulaError) {
		return translate({message: "La formule \"{{x}}\" est invalide."}).replace("{{x}}", error.formula);
	}
	if (error instanceof MaxGreater) {
		return translate({message: "Le maximum est supérieur au minimum"});
	}
	if (error instanceof EmptyObjectError) {
		return translate({message: "Les dés de capacités ont été mal renseignés."});
	}
	if (error instanceof TooManyDice) {
		return translate({message: "Trop de dés (max : 25)"});
	}
	if (error instanceof NoStatisticsError) {
		return translate({message: "Aucune statistique n'a été trouvée"});
	}
	if (error instanceof TooManyStats) {
		return translate({message: "Trop de statistiques (max : 25)"});
	}
	return translate({message: "Une erreur est survenue : {{x}}"}).replace("{{x}}", error.message);
	
}