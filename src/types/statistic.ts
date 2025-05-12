import { IIdentifiable } from "./identifiable";

export interface IStatisticCore extends IIdentifiable {
  suffix: string;
  value: number;
  icon: React.ComponentType<{ className?: string }>;
}
export interface ITranslatableStatistic {
  label: string;
}

export interface IStatistic extends IStatisticCore, ITranslatableStatistic {}
