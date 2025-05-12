"use strict";
exports.__esModule = true;
exports.experiences = void 0;
var enum_1 = require("../constants/enum");
exports.experiences = [
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
            enum_1.FrontendTech.ReactJs,
            enum_1.FrontendTech.AntDesign,
            enum_1.FrontendTech.Typescript,
            enum_1.FrontendTech.SaSS,
        ],
        roles: [enum_1.Role.TeamLead, enum_1.Role.FrontendDeveloper],
        projects: [{ id: "allure", code: "allure" }]
    },
];
