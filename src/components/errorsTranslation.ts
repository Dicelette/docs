import {translate} from "@docusaurus/Translate";

export function translateError(code: string) {
	switch(code) {
	case "error.emptyObject" : return translate({message: "L'objet {{x}} est vide"});
	case "common.space" : return translate({message: " "});
	case "error.invalidDice.withoutDice" : return translate({message: "Le dé {{x}} est invalide."});
	case "error.invalidFormula" : return translate({message: "La formule {{x}} est invalide."});
	case "error.invalidDice" : return translate({message: "Le dé {{x}} est invalide"});
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
	if (code.startsWith("Expected")) {
		return translate({message: "Erreur dans le dé : "}) + 
			code.replace("Expected", translate({message: "Attendant"}))
			.replace("but", translate({message: "mais"}))
			.replaceAll(/\bor/gm, translate({message: "ou"}))
			.replace("found", translate({message: "trouvé"}))
	} else if (toTranslate) {
		const group = toTranslate[0].replace("[", "").replace("]", "").split(",");
		for (const code of group) {
			msg += translateError(code.trim());
		}
		const restOfError = code.replace(/\[(.*)\]/gi, "");
		return msg.length > 0 ? msg.replaceAll("{{x}}", restOfError) : restOfError;
	}
	return code;
}