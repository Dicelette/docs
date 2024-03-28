type Character = {
    name: string;
    statistics: Statistics;
}

type Statistics = {
    min: number;
    max: number;
    combinaison: string;
  };

  type Critical = {
    success: number;
    failure: number;
  }

  type Damage = {
    name: string;
    value: string;
  }

type Template = {
    charName: boolean;
    characters?: Character[];
    critical: Critical;
    damages?: Damage[];
    diceType: string;
    total: number;
  }

export { Character, Critical, Damage, Statistics, Template };