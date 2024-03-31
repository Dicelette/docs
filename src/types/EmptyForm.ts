import { Template } from "./Template";

const emptyForm = ():Template => ({
	isCharNameRequired: false,
	statistics: [],
	total: 0,
	diceType: "",
	critical: { success: 0, failure: 0 },
	damages: [],
});

export default emptyForm();