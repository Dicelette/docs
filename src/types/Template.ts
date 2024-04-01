type Statistic = {
    name: string;
    values: StatisticValues;
    id?: number;
}

type StatisticValues = {
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
    isCharNameRequired: boolean;
    statistics?: Statistic[];
    critical: Critical;
    damages?: Damage[];
    diceType: string;
    total: number;
  }

export { Critical, Damage, Statistic, StatisticValues, Template };