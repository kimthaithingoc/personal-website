import { IExperience } from "@/types/experience";
import { FrontendTech, Role } from "../constants/enum";

export const experiences: IExperience[] = [
  {
    id: "exp-1",
    code: "FPT",
    startDate: "2024-01",
    endDate: "2024-05",
    position: "Front-End Intern",
    company: "FPT Software",
    location: "Ho Chi Minh City, VietNam",
    description: [
      "Graduated from the OJT program with a perfect score (10/10).",
      "Led an 8-member team following Agile/Scrum methodologies using Jira, ensuring effective planning, progress tracking, and smooth reporting.",
      "Served as class representative, actively led the class in participating in company activities and achieved multiple accomplishments.",
    ],
    technologies: [
      FrontendTech.ReactJs,
      FrontendTech.AntDesign,
      FrontendTech.Typescript,
      FrontendTech.SaSS,
    ],
    roles: [Role.TeamLead, Role.FrontendDeveloper],
    projects: [{ id: "allure", code: "allure" }],
  },
];
