"use strict";
exports.__esModule = true;
exports.experiences = void 0;
var enum_1 = require("../constants/enum");
exports.experiences = [
    {
        id: "cnpt-fullstack",
        code: "CNPT",
        startDate: "2025-07-18",
        endDate: "2025-06-01",
        position: "Full-stack Intern",
        company: "CNPT",
        location: "Da Nang City, VietNam",
        description: [
            "Developed a full-stack criminal investigation system using React, TypeScript, NestJS, MySQL, and Restful APIs, robust features for report and physical evidence management using React Query and Redux Toolkit.",
            "Collaborated across a 13-member Agile team to design databases, align with business analyst requirements, and ensure feature readiness and handoff for QA.",
        ],
        technologies: [
            enum_1.FrontendTech.ReactJs,
            enum_1.FrontendTech.ShadCN,
            enum_1.FrontendTech.TailwindCSS,
            enum_1.FrontendTech.Typescript,
            enum_1.BackendTech.NestJS,
            enum_1.DatabaseTech.MySQL,
        ],
        roles: [enum_1.Role.FullstackDeveloper],
        projects: [{ id: "cimus", code: "cimus" }]
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
            enum_1.FrontendTech.ReactJs,
            enum_1.FrontendTech.AntDesign,
            enum_1.FrontendTech.Typescript,
            enum_1.FrontendTech.Bootstrap,
            enum_1.FrontendTech.SaSS,
            enum_1.QATech.Cypress,
            enum_1.QATech.Vitest,
            enum_1.OtherTech.GitLab,
            enum_1.OtherTech.GitLabCI,
        ],
        roles: [enum_1.Role.TeamLead, enum_1.Role.FrontendDeveloper],
        projects: [{ id: "fams", code: "fams" }]
    },
];
