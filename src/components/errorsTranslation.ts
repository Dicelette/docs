export function translateError(code: string) {
	switch(code) {
	case "error.emptyObject" : return "L'objet est vide";
	case "common.space" : return " ";
	case "error.invalidDice.withoutDice" : return "Le dé est invalide";
	case "error.invalidFormula" : return "La formule est invalide";
	case "error.invalidDice" : return "Le dé est invalide";
	case "error.maxGreater" : return "Le maximum doit être supérieur au minimum";
	case "error.tooManyDice" : return "Trop de dés (supérieur à 25)";
	case "error.noStat" : return "Aucune statistique";

	}
}

/** Convert [error, errorcode] {errorMessageValue} to something readable */
export function errorCode(error: Error) {
	const code = error.message;
	const toTranslate = code.match(/\[(.*)\]/gi);
	let msg = "";
	if (toTranslate) {
		const group = toTranslate[0].replace("[", "").replace("]", "").split(",");
		for (const code of group) {
			msg += translateError(code);
		}	
	}
	const restOfError = code.replace(/\[(.*)\]/gi, "");
	return msg + restOfError;
}