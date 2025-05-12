import { IProject } from "@/types/project";
import {
  BackendTech,
  DatabaseTech,
  DevOpsTech,
  FrontendTech,
  MobileTech,
  OtherTech,
  ProjectCategory,
  ProjectPlatform,
  ResourceType,
  Role,
  TechStackCategory,
} from "../constants/enum";

export const projects: IProject[] = [
  {
    id: "allure",
    code: "allure",
    images: [
      "/images/portfolio/sample.jpg",
      "/images/portfolio/sample.jpg",
      "/images/portfolio/sample.jpg",
      "/images/portfolio/sample.jpg",
      "/images/portfolio/sample.jpg",
    ],
    techStack: [
      {
        category: TechStackCategory.Frontend,
        tech: [
          FrontendTech.ReactJs,
          FrontendTech.Typescript,
          FrontendTech.TailwindCSS,
        ],
      },
      {
        category: TechStackCategory.Backend,
        tech: [BackendTech.ExpressJs],
      },
      {
        category: TechStackCategory.Mobile,
        tech: [MobileTech.ReactNative],
      },
      {
        category: TechStackCategory.Database,
        tech: [DatabaseTech.PostgreSQL, DatabaseTech.Redis],
      },
      {
        category: TechStackCategory.DevOps,
        tech: [DevOpsTech.Vercel],
      },
      {
        category: TechStackCategory.Others,
        tech: [OtherTech.Figma, OtherTech.Postman, OtherTech.GitHub],
      },
    ],
    metrics: {
      users: [{ platform: "Mobile", count: 23 }],
    },
    platform: [ProjectPlatform.WebApp, ProjectPlatform.MobileApp],
    category: [ProjectCategory.eCommerce],
    resources: [
      { type: ResourceType.Demo, url: "https://artzy-demo.com" },
      { type: ResourceType.Github, url: "https://artzy-demo.com" },
      { type: ResourceType.Document, url: "https://artzy-demo.com" },
      { type: ResourceType.Figma, url: "https://artzy-demo.com" },
    ],
    videoDemo: "/images/portfolio/demo-sample.mp4",
    startTime: "2024-10-06",
    endTime: "2025-04-23",
    contribution: {
      percentage: 35,
      role: [Role.FrontendDeveloper, Role.UIUXDesigner],
    },
    team: [
      { role: Role.FrontendDeveloper, members: 3 },
      { role: Role.BackendDeveloper, members: 2 },
      { role: Role.AIEngineer, members: 2 },
      { role: Role.BusinessAnalyst, members: 2 },
      { role: Role.Contributor, members: 2 },
    ],
    title: "Allure",
    summary:
      "Allure is an e-commerce platform for authentic beauty products, connecting customers with official brands, KOL livestreams, and professional beauty consultants.",
    description:
      "Allure is an end-to-end e-commerce solution tailored for the beauty industry. It enables official beauty brands to register, manage product listings (including flash sales, pre-orders, and group buying), and directly sell to customers. The platform also includes features for professional beauty consultants to offer personalized makeup consultations and for KOLs (Key Opinion Leaders) to host live selling events. The system comprises a customer-facing website and app, a management dashboard for admin, operator, brands, consultants, and a KOL interface.",
    problemStatement:
      "Beauty brands face challenges ensuring product authenticity and customer trust in online channels. Customers often struggle to find genuine products and personalized beauty advice. Consultants have limited platforms for exposure, and engagement between customers and brands/KOLs is often impersonal and transactional.",
    solutionOverview:
      "Allure solves these issues by enabling official brand onboarding for product authenticity, connecting customers with verified consultants for professional services, and providing real-time, interactive shopping experiences via KOL livestreams—delivering a trusted and engaging shopping journey.",
    responsibilities: [
      "Top #1 contributor on GitHub for the Customer Website, Management Dashboard, and Customer Mobile App repositories.",
      "Developed 70% of the core e-commerce frontend flows, including robust handling for edge cases (e.g., out-of-stock products, inactive listings, invalid cart actions), significantly improving reliability and user experience.",
      "Implemented 85% of the features in the Customer Mobile App using React Native.",
      "Led UI/UX design during the initial sprint, creating Figma designs that accelerated frontend development by 30%.",
      "Designed technical documentation including Swimlane Diagrams and Screen Flows for better cross-functional collaboration.",
      "Created test plans and executed manual testing on core e-commerce functionalities to ensure seamless user experience and bug-free release cycles.",
    ],
    features: [
      "Official brand registration with product management (normal, flash sale, pre-order, group buying), order tracking, status updates, and sales analytics.",
      "Consultation services management: customers can book consultations with professionals, receive personalized advice, and track their bookings.",
      "Live selling through KOL live streams where customers can interact and purchase products in real time.",
      "Feedback and reporting system to ensure service quality and user satisfaction.",
    ],
    lessonsLearned: [
      "Effective planning and early design documentation significantly reduce development bottlenecks.",
      "Integrating automated and manual testing early in the cycle reduced bugs and improved stability during release phases.",
    ],
    futurePlans: [
      "Integrate real-time shipping tracking with third-party logistics providers.",
      "Implement AI-based product recommendations and consultation matching.",
    ],
  },
];
