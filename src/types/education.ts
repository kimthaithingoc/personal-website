import { IIdentifiable } from "./identifiable";

export interface IEducationCore extends IIdentifiable {
  startDate: string;
  endDate: string;
  gpa?: string;
}
export interface ITranslatableEducation {
  institution: string;
  degree: string;
  field: string;
  location: string;
  description?: string;
  achievements?: string[];
}
export interface IEducation extends IEducationCore, ITranslatableEducation {}
