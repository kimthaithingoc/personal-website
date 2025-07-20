import { IExperience } from "@/types/experience";
import {
  BackendTech,
  DatabaseTech,
  FrontendTech,
  OtherTech,
  QATech,
  Role,
} from "../constants/enum";

export const experiences: IExperience[] = [
  {
    id: "cnpt-fullstack",
    code: "CNPT",
    startDate: "2025-07",
    endDate: "2025-06",
    position: "Full-stack Intern",
    company: "CNPT",
    location: "Da Nang City, VietNam",
    description: [
      "Developed a full-stack criminal investigation system using React, TypeScript, NestJS, MySQL, and Restful APIs, robust features for report and physical evidence management using React Query and Redux Toolkit.",
      "Collaborated across a 13-member Agile team to design databases, align with business analyst requirements, and ensure feature readiness and handoff for QA.",
    ],
    technologies: [
      FrontendTech.ReactJs,
      FrontendTech.ShadCN,
      FrontendTech.TailwindCSS,
      FrontendTech.Typescript,
      BackendTech.NestJS,
      DatabaseTech.MySQL,
    ],
    roles: [Role.FullstackDeveloper],
    projects: [{ id: "cimus", code: "cimus" }],
  },
  {
    id: "fpt-front-end-intern",
    code: "FPT",
    startDate: "2024-01",
    endDate: "2024-05",
    position: "Front-End Intern",
    company: "FPT Software",
    location: "Ho Chi Minh City, VietNam",
    description: [
      "Led an 8-member Agile/Scrum team using Jira for efficient task planning and progress tracking; developed features for student management, scoring, and reservation.",
      "Built CI/CD pipeline by GitLab CI with lint, Vitest checks pre-merge to ensure code quality.",
      "Led an 8-member team following Agile/Scrum methodologies using Jira, ensuring effective planning, progress tracking, and smooth reporting.",
      "Achieved 73% overall test coverage (statements/lines) with Vitest, and implemented Cypress for end-to-end testing.",
      "Served as class representative, actively led the class in participating in company activities and achieved multiple accomplishments.",
    ],
    technologies: [
      FrontendTech.ReactJs,
      FrontendTech.AntDesign,
      FrontendTech.Typescript,
      FrontendTech.Bootstrap,
      FrontendTech.SaSS,
      QATech.Cypress,
      QATech.Vitest,
      OtherTech.GitLab,
      OtherTech.GitLabCI,
    ],
    roles: [Role.TeamLead, Role.FrontendDeveloper],
    projects: [{ id: "fams", code: "fams" }],
  },
];
