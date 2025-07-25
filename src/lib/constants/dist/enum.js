"use strict";
exports.__esModule = true;
exports.ResourceType = exports.UrlType = exports.Role = exports.OtherTech = exports.DevOpsTech = exports.DatabaseTech = exports.ThirdPartyTech = exports.MobileTech = exports.BackendTech = exports.TechStackCategory = exports.QATech = exports.FrontendTech = exports.ProjectPlatform = exports.ProjectCategory = void 0;
var ProjectCategory;
(function (ProjectCategory) {
    ProjectCategory["SaaS"] = "SaaS";
    ProjectCategory["eCommerce"] = "E-commerce";
    ProjectCategory["DevTool"] = "Dev Tool";
    ProjectCategory["Portfolio"] = "Portfolio";
    ProjectCategory["InternalTool"] = "Internal Tool";
    ProjectCategory["Game"] = "Game";
    ProjectCategory["AI_ML"] = "AI/ML";
    ProjectCategory["OpenSource"] = "Open Source";
    ProjectCategory["Education"] = "Education";
    ProjectCategory["Finance"] = "Finance";
    ProjectCategory["Healthcare"] = "Healthcare";
    ProjectCategory["POS"] = "POS System";
})(ProjectCategory = exports.ProjectCategory || (exports.ProjectCategory = {}));
var ProjectPlatform;
(function (ProjectPlatform) {
    ProjectPlatform["WebApp"] = "Web App";
    ProjectPlatform["Website"] = "Website";
    ProjectPlatform["MobileApp"] = "Mobile App";
    ProjectPlatform["DesktopApp"] = "Desktop App";
    ProjectPlatform["APIService"] = "API Service";
    ProjectPlatform["CLITool"] = "CLI Tool";
    ProjectPlatform["BrowserExtension"] = "Browser Extension";
    ProjectPlatform["IoTApp"] = "IoT App";
    ProjectPlatform["Game"] = "Game";
})(ProjectPlatform = exports.ProjectPlatform || (exports.ProjectPlatform = {}));
var FrontendTech;
(function (FrontendTech) {
    FrontendTech["ReactJs"] = "ReactJS";
    FrontendTech["AntDesign"] = "Ant Design";
    FrontendTech["SaSS"] = "SaSS";
    FrontendTech["ScSS"] = "ScSS";
    FrontendTech["Vue"] = "Vue";
    FrontendTech["Angular"] = "Angular";
    FrontendTech["Svelte"] = "Svelte";
    FrontendTech["NextJS"] = "Next.js";
    FrontendTech["NuxtJS"] = "Nuxt.js";
    FrontendTech["HTML_CSS_JS"] = "HTML/CSS/JS";
    FrontendTech["TailwindCSS"] = "Tailwind CSS";
    FrontendTech["Bootstrap"] = "Bootstrap";
    FrontendTech["Typescript"] = "TypeScript";
    FrontendTech["Javascript"] = "Javascript";
    FrontendTech["Zustand"] = "Zustand";
    FrontendTech["Redux"] = "Redux";
    FrontendTech["ReactQuery"] = "React Query";
    FrontendTech["ShadCN"] = "ShadCN UI";
})(FrontendTech = exports.FrontendTech || (exports.FrontendTech = {}));
var QATech;
(function (QATech) {
    QATech["Vitest"] = "Vitest";
    QATech["Cypress"] = "Cypress";
})(QATech = exports.QATech || (exports.QATech = {}));
var TechStackCategory;
(function (TechStackCategory) {
    TechStackCategory["Frontend"] = "Frontend";
    TechStackCategory["Backend"] = "Backend";
    TechStackCategory["Mobile"] = "Mobile";
    TechStackCategory["DevOps"] = "DevOps";
    TechStackCategory["Others"] = "Others";
    TechStackCategory["Database"] = "Database";
})(TechStackCategory = exports.TechStackCategory || (exports.TechStackCategory = {}));
var BackendTech;
(function (BackendTech) {
    BackendTech["NodeJS"] = "Node.js";
    BackendTech["ExpressJs"] = "Express.js";
    BackendTech["NestJS"] = "NestJS";
    BackendTech["Django"] = "Django";
    BackendTech["Flask"] = "Flask";
    BackendTech["RubyOnRails"] = "Ruby on Rails";
    BackendTech["SpringBoot"] = "Spring Boot";
    BackendTech["Laravel"] = "Laravel";
    BackendTech["ASPNet"] = "ASP.NET";
    BackendTech["Go"] = "Go";
})(BackendTech = exports.BackendTech || (exports.BackendTech = {}));
var MobileTech;
(function (MobileTech) {
    MobileTech["ReactNative"] = "React Native";
    MobileTech["AsyncStorage"] = "Async Storage";
    MobileTech["Nativewind"] = "Nativewind";
    MobileTech["Expo"] = "Expo";
})(MobileTech = exports.MobileTech || (exports.MobileTech = {}));
var ThirdPartyTech;
(function (ThirdPartyTech) {
    ThirdPartyTech["FirebaseAuthentication"] = "Firebase Authentication";
})(ThirdPartyTech = exports.ThirdPartyTech || (exports.ThirdPartyTech = {}));
var DatabaseTech;
(function (DatabaseTech) {
    DatabaseTech["MongoDB"] = "MongoDB";
    DatabaseTech["PostgreSQL"] = "PostgreSQL";
    DatabaseTech["MySQL"] = "MySQL";
    DatabaseTech["SQLite"] = "SQLite";
    DatabaseTech["Firebase"] = "Firebase";
    DatabaseTech["Supabase"] = "Supabase";
    DatabaseTech["Redis"] = "Redis";
    DatabaseTech["Oracle"] = "Oracle";
    DatabaseTech["SQLServer"] = "SQLServer";
})(DatabaseTech = exports.DatabaseTech || (exports.DatabaseTech = {}));
var DevOpsTech;
(function (DevOpsTech) {
    DevOpsTech["Docker"] = "Docker";
    DevOpsTech["Kubernetes"] = "Kubernetes";
    DevOpsTech["AWS"] = "AWS";
    DevOpsTech["Azure"] = "Azure";
    DevOpsTech["GCP"] = "GCP";
    DevOpsTech["Vercel"] = "Vercel";
    DevOpsTech["Netlify"] = "Netlify";
    DevOpsTech["Heroku"] = "Heroku";
    DevOpsTech["CI_CD"] = "CI/CD";
    DevOpsTech["Nginx"] = "Nginx";
})(DevOpsTech = exports.DevOpsTech || (exports.DevOpsTech = {}));
var OtherTech;
(function (OtherTech) {
    OtherTech["Git"] = "Git";
    OtherTech["GitHub"] = "GitHub";
    OtherTech["GitLab"] = "GitLab";
    OtherTech["GitLabCI"] = "GitLab CI";
    OtherTech["Figma"] = "Figma";
    OtherTech["Postman"] = "Postman";
    OtherTech["Jira"] = "Jira";
    OtherTech["WebSockets"] = "WebSockets";
    OtherTech["GraphQL"] = "GraphQL";
    OtherTech["WebRTC"] = "WebRTC";
    OtherTech["Redux"] = "Redux";
})(OtherTech = exports.OtherTech || (exports.OtherTech = {}));
var Role;
(function (Role) {
    Role["FullstackDeveloper"] = "Fullstack Developer";
    Role["FrontendDeveloper"] = "Frontend Developer";
    Role["BackendDeveloper"] = "Backend Developer";
    Role["MobileDeveloper"] = "Mobile Developer";
    Role["UIUXDesigner"] = "UI/UX Designer";
    Role["DevOpsEngineer"] = "DevOps Engineer";
    Role["ProjectManager"] = "Project Manager";
    Role["ProductOwner"] = "Product Owner";
    Role["QAEngineer"] = "QA Engineer";
    Role["DataScientist"] = "Data Scientist";
    Role["AIEngineer"] = "AI Engineer";
    Role["BusinessAnalyst"] = "Business Analyst";
    Role["TechLead"] = "Tech Lead";
    Role["TeamLead"] = "Team Lead";
    Role["SoftwareArchitect"] = "Software Architect";
    Role["Intern"] = "Intern";
    Role["Contributor"] = "Contributor";
    Role["Marketing"] = "Marketing";
})(Role = exports.Role || (exports.Role = {}));
var UrlType;
(function (UrlType) {
    UrlType["FrontEnd"] = "Frontend";
    UrlType["Backend"] = "Backend";
    UrlType["Mobile"] = "Mobile";
})(UrlType = exports.UrlType || (exports.UrlType = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["Github"] = "Github";
    ResourceType["Demo"] = "Demo";
    ResourceType["Figma"] = "Figma";
    ResourceType["Document"] = "Document";
    ResourceType["Postman"] = "Postman";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
