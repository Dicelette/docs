import { Template } from "./Template";

const emptyForm = ():Template => ({
	isCharNameRequired: false,
	statistics: [{
		name: "Test",
		values: { min: 0, max: 0, combinaison: "" },
	}],
	total: 0,
	diceType: "",
	critical: { success: 0, failure: 0 },
	damages: [],
});

export default emptyForm();