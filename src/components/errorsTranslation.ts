import {translate} from "@docusaurus/Translate";

export function translateError(code: string) {
	console.error(code);
	switch(code) {
	case "error.emptyObject" : return translate({message: "L'objet est vide"});
	case "common.space" : return translate({message: " : "});
	case "error.invalidDice.withoutDice" : return translate({message: "Le dé est invalide"});
	case "error.invalidFormula" : return translate({message: "La formule est invalide"});
	case "error.invalidDice" : return translate({message: "Le dé est invalide"});
	case "error.maxGreater" : return translate({message: "Le maximum est supérieur au minimum"});
	case "error.tooManyDice" : return translate({message: "Trop de dés (max : 25)"});
	case "error.noStat" : return translate({message: "Aucune statistique n'a été trouvée"});
	
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
			msg += translateError(code.trim());
		}	
	}
	const restOfError = code.replace(/\[(.*)\]/gi, "");
	return msg + restOfError;
}