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
  ThirdPartyTech,
} from "../constants/enum";

export const projects: IProject[] = [
  {
    id: "allure",
    code: "allure",
    images: [
      "/images/portfolio/project/allure/1.png",
      "/images/portfolio/project/allure/2.png",
      "/images/portfolio/project/allure/3.png",
      "/images/portfolio/project/allure/4.png",
      "/images/portfolio/project/allure/5.png",
      "/images/portfolio/project/allure/6.png",
      "/images/portfolio/project/allure/8.png",
      "/images/portfolio/project/allure/10.png",
      "/images/portfolio/project/allure/11.png",
      "/images/portfolio/project/allure/12.png",
      "/images/portfolio/project/allure/13.png",
      "/images/portfolio/project/allure/14.png",
      "/images/portfolio/project/allure/15.png",
      "/images/portfolio/project/allure/16.png",
      "/images/portfolio/project/allure/17.png",
      "/images/portfolio/project/allure/18.png",
    ],
    mobileImages: [
      "/images/portfolio/project/allure/19.jpg",
      "/images/portfolio/project/allure/20.jpg",
      "/images/portfolio/project/allure/21.jpg",
      "/images/portfolio/project/allure/22.jpg",
      "/images/portfolio/project/allure/23.jpg",
      "/images/portfolio/project/allure/24.jpg",
      "/images/portfolio/project/allure/25.jpg",
      "/images/portfolio/project/allure/26.jpg",
      "/images/portfolio/project/allure/27.jpg",
      "/images/portfolio/project/allure/28.jpg",
      "/images/portfolio/project/allure/29.jpg",
      "/images/portfolio/project/allure/30.jpg",
      "/images/portfolio/project/allure/31.jpg",
      "/images/portfolio/project/allure/32.jpg",
      "/images/portfolio/project/allure/33.jpg",
      "/images/portfolio/project/allure/34.jpg",
      "/images/portfolio/project/allure/35.jpg",
      "/images/portfolio/project/allure/36.jpg",
      "/images/portfolio/project/allure/37.jpg",
      "/images/portfolio/project/allure/38.jpg",
      "/images/portfolio/project/allure/39.jpg",
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
        tech: [DevOpsTech.Netlify],
      },
      {
        category: TechStackCategory.Others,
        tech: [OtherTech.Figma, OtherTech.Postman, OtherTech.GitHub],
      },
    ],
    platform: [ProjectPlatform.WebApp, ProjectPlatform.MobileApp],
    category: [ProjectCategory.eCommerce],
    resources: [
      { type: ResourceType.Demo, url: "https://allure-e.netlify.app/" },
      { type: ResourceType.Github, url: "https://github.com/HaHasTeam/" },
      {
        type: ResourceType.Document,
        url: "https://drive.google.com/drive/folders/14cnpA3YqPVsqmK7mMd3KAYmYvCvC3GAL?usp=sharing",
      },
      {
        type: ResourceType.Figma,
        url: "https://www.figma.com/design/LjKyVNBGdRK5JRsSqz21QZ/Untitled?node-id=0-1&t=zEsGnllQNrWY47KZ-1",
      },
    ],
    videoDemo: "https://www.youtube.com/embed/SA9USKp2QHE",
    videoThumbnail: "/images/portfolio/project/allure/Demo-Cover.jpg",
    startTime: "2024-10-06",
    endTime: "2025-05-08",
    contribution: {
      percentage: 30,
      role: [Role.FrontendDeveloper, Role.UIUXDesigner],
    },
    team: [
      { role: Role.FrontendDeveloper, members: 3 },
      { role: Role.BackendDeveloper, members: 2 },
    ],
    title: "Allure",
    summary:
      "Allure is an e-commerce platform for authentic beauty products, connecting customers with official brands, KOL livestreams, and professional beauty consultants.",
    description:
      "Allure is an end-to-end e-commerce solution tailored for the beauty industry. It enables official beauty brands to register, manage product listings (including flash sales, pre-orders, and group buying), and directly sell to customers. The platform also includes features for professional beauty consultants to offer personalized makeup consultations and for KOLs (Key Opinion Leaders) to host live selling events. The system comprises a customer-facing website and app, a management dashboard for admin, operator, brands, consultants, as well as a dedicated app for KOLs.",
    problemStatement:
      "Beauty brands face challenges ensuring product authenticity and customer trust in online channels. Customers often struggle to find genuine products and personalized beauty advice. Consultants have limited platforms for exposure, and engagement between customers and brands/KOLs is often impersonal and transactional.",
    solutionOverview:
      "Allure solves these issues by enabling official brand onboarding for product authenticity, connecting customers with verified consultants for professional services, and providing real-time, interactive shopping experiences via KOL livestreams—delivering a trusted and engaging shopping journey.",
    responsibilities: [
      "Developed 70% of the core e-commerce frontend flows, including product browsing, product management, cart management, order processing, feedback management, and consultant services management, with robust handling for edge cases (e.g., out-of-stock products, inactive listings, invalid cart actions), significantly improving reliability and user experience.",
      "Implemented 85% of the features include product management, order management in the Customer Mobile App using React Native.",
      "Designed 90% of screens and components in Figma, accelerating frontend development by 30%.",
      "Designed technical documentation including Swimlane Diagrams and Screen Flows, Software Requirements Specification for better cross-functional collaboration.",
      "Created test documents and executed manual testing on core e-commerce functionalities to ensure seamless user experience and bug-free release cycles.",
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
  {
    id: "cimus",
    code: "cimus",
    images: [
      "/images/portfolio/project/cimus/1.jpg",
      "/images/portfolio/project/cimus/2.png",
      "/images/portfolio/project/cimus/3.png",
      "/images/portfolio/project/cimus/4.png",
      "/images/portfolio/project/cimus/5.png",
      "/images/portfolio/project/cimus/6.png",
      "/images/portfolio/project/cimus/7.png",
    ],
    techStack: [
      {
        category: TechStackCategory.Frontend,
        tech: [
          FrontendTech.ReactJs,
          FrontendTech.Typescript,
          FrontendTech.ShadCN,
          FrontendTech.TailwindCSS,
          FrontendTech.ReactQuery,
          FrontendTech.Redux,
        ],
      },
      {
        category: TechStackCategory.Backend,
        tech: [BackendTech.NestJS],
      },

      {
        category: TechStackCategory.Database,
        tech: [DatabaseTech.MySQL],
      },
      {
        category: TechStackCategory.Others,
        tech: [OtherTech.Postman, OtherTech.GitHub],
      },
    ],
    platform: [ProjectPlatform.WebApp],
    category: [ProjectCategory.InternalTool],
    resources: [
      {
        type: ResourceType.Github,
        url: "https://github.com/ngockim109/crime_investigation_management_system",
      },
      {
        type: ResourceType.Document,
        url: "https://drive.google.com/drive/folders/1tRCr4B5b-2jz4DUcdmzjZdtpkiTIobt3?usp=sharing",
      },
      {
        type: ResourceType.Postman,
        url: "https://mockprojectnhom6.postman.co/workspace/MockProjectNhom6's-Workspace~9f7d878b-b704-449b-8e02-a746bc627077/collection/46454979-e0b46629-f907-4b7f-99fc-685e3bbf5d34?action=share&creator=46454979",
      },
    ],
    videoDemo: "https://www.youtube.com/embed/mRRYz1J9M-Y",
    videoThumbnail: "/images/portfolio/project/cimus/Demo-Cover.jpg",
    startTime: "2025-06",
    endTime: "2025-07",
    contribution: {
      percentage: 10,
      role: [Role.FrontendDeveloper, Role.UIUXDesigner],
    },
    team: [
      { role: Role.FullstackDeveloper, members: 2 },
      { role: Role.FrontendDeveloper, members: 3 },
      { role: Role.BackendDeveloper, members: 5 },
      { role: Role.BusinessAnalyst, members: 1 },
      { role: Role.QAEngineer, members: 1 },
      { role: Role.ProductOwner, members: 1 },
    ],
    title: "Crime Investigation Management System in the US",
    summary:
      "A centralized web-based system designed to streamline crime reporting, investigation, arrest, prosecution, and correction processes for U.S. law enforcement agencies.",
    description:
      "CIMUS (Crime Investigation Management System) is a full-stack web application supporting U.S. law enforcement agencies through every phase of a criminal case. It facilitates efficient crime reporting, evidence management, case assignment, legal document handling, suspect tracking, and more. With a user-friendly interface and real-time data capabilities, the system significantly improves the workflow from crime detection to sentencing and post-release supervision.",
    problemStatement:
      "Traditional crime management processes are fragmented, heavily paper-based, and lack real-time synchronization between departments. This leads to delays, data loss, and poor coordination among law enforcement, prosecution, and correctional systems.",
    solutionOverview:
      "CIMUS unifies crime management into a secure, centralized platform. It provides modules for reporting, investigation, evidence handling, arrest procedures, legal processing, and corrections. Through robust data tracking, real-time updates, and integration with existing systems, CIMUS enables faster, more accurate case handling while ensuring legal compliance and data security.",
    responsibilities: [
      "Developed a full-stack criminal investigation system using React, TypeScript, NestJS, MySQL, and RESTful APIs in an Agile environment.",
      "Delivered responsive UI and structured frontend code using React Query and Redux Toolkit for real-time report and evidence management.",
      "Collaborated with cross-functional teams in Agile sprints to design database schemas, ensure business alignment with analysts, and maintain code quality.",
      "Worked with QA testers to write testable code and improve test coverage using GitHub collaboration workflows.",
      "Contributed to the architecture and feature planning for the reporting and preliminary investigation modules, ensuring scalability and maintainability.",
    ],
    features: [
      "Online crime reporting module supporting both identified and anonymous reports.",
      "User-friendly forms for entering incident details, victim/suspect information, and location data.",
      "Report tracking system allowing law enforcement officers to manage status and assignments.",
      "Crime scene documentation tools including photo/video uploads and secure cloud storage.",
      "Evidence intake and tracking system with categorization and status updates.",
    ],
    lessonsLearned: [
      "Collaborating in a cross-functional team revealed the importance of clear communication between frontend and backend roles.",
      "UI/UX decisions must align with real-world workflows of law enforcement users to ensure adoption.",
    ],
    futurePlans: [
      "Integrate AI-powered data analysis to automatically detect connections between cases and identify crime patterns.",
      "Expand mobile features for field officers, including offline reporting support.",
      "Add multilingual support to accommodate diverse user populations.",
      "Integrate with national criminal databases (e.g., NCIC) and forensic labs for automated syncing.",
      "Implement facial recognition and license plate scanning integration for suspect identification.",
    ],
  },
  {
    id: "hako",
    code: "hako",
    images: ["/images/portfolio/project/hako/1.png"],
    mobileImages: [
      "/images/portfolio/project/hako/2.jpg",
      "/images/portfolio/project/hako/3.jpg",
      "/images/portfolio/project/hako/4.jpg",
      "/images/portfolio/project/hako/5.jpg",
      "/images/portfolio/project/hako/6.jpg",
      "/images/portfolio/project/hako/7.jpg",
      "/images/portfolio/project/hako/8.jpg",
      "/images/portfolio/project/hako/9.jpg",
    ],
    techStack: [
      {
        category: TechStackCategory.Mobile,
        tech: [
          MobileTech.ReactNative,
          MobileTech.Expo,
          ThirdPartyTech.FirebaseAuthentication,
          MobileTech.AsyncStorage,
          FrontendTech.Zustand,
          FrontendTech.Typescript,
          FrontendTech.TailwindCSS,
          FrontendTech.ReactQuery,
          MobileTech.Nativewind,
        ],
      },
      {
        category: TechStackCategory.Backend,
        tech: [BackendTech.SpringBoot],
      },
      {
        category: TechStackCategory.Database,
        tech: [DatabaseTech.PostgreSQL],
      },
      {
        category: TechStackCategory.Others,
        tech: [OtherTech.GitHub],
      },
    ],
    platform: [ProjectPlatform.MobileApp],
    category: [ProjectCategory.eCommerce, ProjectCategory.POS],
    resources: [
      {
        type: ResourceType.Github,
        url: "https://github.com/HakoTeam/",
      },
    ],
    videoThumbnail: "/images/portfolio/project/hako/Demo-Cover.png",
    startTime: "2025-06-13",
    contribution: {
      percentage: 60,
      role: [Role.MobileDeveloper],
    },
    team: [
      { role: Role.FrontendDeveloper, members: 1 },
      { role: Role.BackendDeveloper, members: 1 },
    ],
    title: "Hako - Retail Inventory & Sales Management App",
    summary:
      "Hako is a mobile app helping small retailers manage inventory, sales, and customer data with ease.",
    description:
      "A POS and inventory management solution tailored for local shop owners in low-tech regions. Built with a mobile-first approach using Expo React Native and Firebase.",
    problemStatement:
      "Local retailers often lack accessible, easy-to-use tools to manage products, stock, and transactions effectively.",
    solutionOverview:
      "Hako provides a simple, offline-friendly app for managing products, orders, invoices, and customer debts with onboarding support and subscription-based access.",
    responsibilities: [
      "Initiated the product concept and led MVP design, sprint planning, and backlog grooming for a cross-functional team using Agile Scrum, Jira, and GitHub",
      "Developed and tested core modules including product management, sales transactions, order tracking, and customer handling using Expo React Native, with support for Firebase Authentication and light/dark theme",
    ],
    features: [
      "Login via phone + OTP + password",
      "Product and inventory management",
      "Sales and stock-out transactions",
      "Customer debt tracking",
      "Trial and Pro subscription flow",
      "Light/Dark theme support",
    ],
    lessonsLearned: [
      "Importance of lean MVP with user-centric UX in early-stage apps",
      "Balancing offline-first design with real-time syncing challenges",
    ],
    futurePlans: [
      "Add barcode scanning and QR invoice exports",
      "Launch merchant dashboard and analytics",
      "Support multi-store collaboration and role-based access",
    ],
  },
  {
    id: "fams",
    code: "fams",
    images: [
      "/images/portfolio/project/fams/1.png",
      "/images/portfolio/project/fams/2.png",
      "/images/portfolio/project/fams/3.png",
    ],
    techStack: [
      {
        category: TechStackCategory.Frontend,
        tech: [
          FrontendTech.ReactJs,
          FrontendTech.Typescript,
          FrontendTech.AntDesign,
          FrontendTech.ScSS,
        ],
      },
      {
        category: TechStackCategory.Backend,
        tech: [BackendTech.ASPNet],
      },

      {
        category: TechStackCategory.Database,
        tech: [DatabaseTech.SQLServer],
      },
      {
        category: TechStackCategory.Others,
        tech: [
          OtherTech.Figma,
          OtherTech.Postman,
          OtherTech.GitLab,
          OtherTech.GitLabCI,
        ],
      },
    ],
    platform: [ProjectPlatform.WebApp],
    category: [ProjectCategory.InternalTool],
    resources: [
      {
        type: ResourceType.Demo,
        url: "https://student-management-system-git-main-hnam-truongs-projects.vercel.app",
      },
      { type: ResourceType.Github, url: "https://github.com/ngockim109/fams" },
      {
        type: ResourceType.Document,
        url: "https://drive.google.com/drive/folders/1ZbFRJq9cDW0_sQOVn35aGzi-epHJLir9?usp=sharing",
      },
    ],
    videoThumbnail: "/images/portfolio/project/fams/Demo-Cover.png",
    startTime: "2024-01-01",
    endTime: "2024-05-17",
    contribution: {
      percentage: 9,
      role: [Role.TeamLead, Role.FrontendDeveloper],
    },
    team: [
      { role: Role.FrontendDeveloper, members: 8 },
      { role: Role.BackendDeveloper, members: 8 },
      { role: Role.ProductOwner, members: 1 },
    ],
    title: "Fresher Academy Management System",
    summary:
      "FAMS is a web-based platform designed to streamline fresher training management by providing centralized control over students, users, scores, and reservations.",
    description:
      "Fresher Academy Management System (FAMS) is an internal platform developed for FPT Software to efficiently manage fresher training programs. It supports end-to-end management of student records, user roles, performance scores, and reservation handling",
    problemStatement:
      "Managing fresher training manually leads to fragmented data, inconsistent reporting, delayed decisions, and inefficient coordination of students, users, and class assignments.",
    solutionOverview:
      "FAMS addresses these issues with a centralized system that simplifies student, user, score, and reservation management. Real-time tracking, performance evaluation, and import/export features significantly improve training efficiency and data accuracy.",
    responsibilities: [
      "Led an 8-member front-end team, defining coding conventions and setting up CI/CD pipelines with ESLint, Vitest, and Cypress to reduce bugs and accelerate development.",
      "Evaluated and selected front-end technologies (React, TypeScript, Ant Design) to ensure scalability and maintainability.",
      "Developed front-end features, including manage score, reserved student and user.",
      "Mentored team members, conducted code reviews, and wrote unit tests to maintain code quality.",
      "Collaborated with the Product Manager to define the product roadmap and deliver features on schedule.",
    ],
    features: [
      "Student management: add, edit, delete, import/export, search, and status updates.",
      "Reserved list handling: re-class, dropout, remove, remind, and bulk actions.",
      "Class management: manage student-class assignments and performance scores.",
      "User management: CRUD operations, search, import/export for internal roles.",
      "Score management: import/export student scores, update score entries.",
      "Search and filtering across all major modules for ease of use.",
      "Reporting and export capabilities for decision-making.",
    ],
    lessonsLearned: [
      "Start with well-defined core features, then iteratively expand additional features based on user feedback and project priorities.",
    ],
    futurePlans: [
      "Integrate AI-driven analytics for personalized trainee performance insights.",
      "Add mobile app support for on-the-go access to training resources.",
    ],
  },
  {
    id: "pickle-play",
    code: "pickle-play",
    images: [
      "/images/portfolio/project/pickle-play/1.png",
      "/images/portfolio/project/pickle-play/2.png",
      "/images/portfolio/project/pickle-play/3.png",
      "/images/portfolio/project/pickle-play/4.png",
      "/images/portfolio/project/pickle-play/5.png",
      "/images/portfolio/project/pickle-play/6.png",
      "/images/portfolio/project/pickle-play/7.png",
      "/images/portfolio/project/pickle-play/8.png",
    ],
    techStack: [
      {
        category: TechStackCategory.Frontend,
        tech: [
          FrontendTech.NextJS,
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
        tech: [DatabaseTech.PostgreSQL],
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
      users: [{ platform: ProjectPlatform.WebApp, count: 20 }],
    },
    platform: [ProjectPlatform.WebApp, ProjectPlatform.MobileApp],
    category: [ProjectCategory.eCommerce],
    resources: [
      { type: ResourceType.Demo, url: "https://pickleplayvietnam.vercel.app/" },
      {
        type: ResourceType.Github,
        url: "https://github.com/truongnhatquang21/badminton-fe",
      },
      {
        type: ResourceType.Document,
        url: "https://drive.google.com/drive/folders/1OV0lMUHi3TGhr0oea6rPonf7_fLMW6vU?usp=sharing",
      },
    ],
    videoDemo: "https://www.youtube.com/embed/sfObCpy5VGk",
    videoThumbnail: "/images/portfolio/project/pickle-play/Demo-Cover.png",
    startTime: "2024-05-01",
    endTime: "2024-11-01",
    contribution: {
      percentage: 20,
      role: [Role.TeamLead, Role.FrontendDeveloper],
    },
    team: [
      { role: Role.FrontendDeveloper, members: 3 },
      { role: Role.BackendDeveloper, members: 2 },
      { role: Role.UIUXDesigner, members: 1 },
      { role: Role.Marketing, members: 1 },
      { role: Role.AIEngineer, members: 1 },
    ],
    title: "PicklePlay",
    summary:
      "PicklePlay is a mobile and web platform that connects pickleball players with nearby courts, offering easy booking features.",
    description:
      "PicklePlay is an online platform and mobile app designed to help pickleball players find and book courts conveniently. It provides detailed information about court locations, opening hours, and prices, and fosters a vibrant community of players. The project was developed as part of an entrepreneurship course, with a focus on user convenience and community engagement.",
    problemStatement:
      "Pickleball players often struggle to find available courts and book them efficiently, leading to wasted time and missed opportunities for community engagement.",
    solutionOverview:
      "Pickle Play simplifies court discovery and booking with a user-friendly mobile app and web platform, integrating real-time court availability and community features to enhance the pickleball experience.",
    responsibilities: [
      "Led an 8-member team, managing project planning and task delegation on Trello to ensure timely delivery.",
      "Developed website app using NextJS and mobile app using React Native, implementing court booking history and order tracking features.",
      "Designed use cases, UML, and ERD diagrams to align development with business objectives.",
      "Coordinated customer outreach to validate platform features and align with user needs.",
    ],
    features: [
      "Court discovery with detailed information on location, hours, and pricing.",
      "Online booking system for quick and convenient court reservations.",
      "User profiles with booking and order history.",
    ],
    lessonsLearned: [
      "User feedback during development ensures the platform meets real-world needs.",
    ],
    futurePlans: [
      "Add social features like community and in-app messaging for player coordination.",
    ],
  },
  {
    id: "artzy",
    code: "artzy",
    images: ["/images/portfolio/project/artzy/1.png"],
    mobileImages: [
      "/images/portfolio/project/artzy/2.jpg",
      "/images/portfolio/project/artzy/3.jpg",
      "/images/portfolio/project/artzy/4.jpg",
      "/images/portfolio/project/artzy/5.jpg",
      "/images/portfolio/project/artzy/6.jpg",
      "/images/portfolio/project/artzy/7.jpg",
      "/images/portfolio/project/artzy/8.jpg",
      "/images/portfolio/project/artzy/9.jpg",
      "/images/portfolio/project/artzy/10.jpg",
      "/images/portfolio/project/artzy/11.jpg",
    ],
    techStack: [
      {
        category: TechStackCategory.Mobile,
        tech: [MobileTech.ReactNative],
      },
      {
        category: TechStackCategory.Others,
        tech: [OtherTech.GitHub],
      },
    ],
    platform: [ProjectPlatform.MobileApp],
    category: [ProjectCategory.InternalTool],
    resources: [
      { type: ResourceType.Github, url: "http://github.com/ngockim109/artzy/" },
    ],
    videoDemo: "https://www.youtube.com/embed/91058kOLrQg",
    videoThumbnail: "/images/portfolio/project/artzy/Demo-Cover.png",
    startTime: "2024-05-10",
    endTime: "2024-05-17",
    title: "Artzy",
    summary:
      "Artzy: Art Tool Explorer App – A mobile app to browse, search, and save favorite art tools.",
    description:
      "Artzy is a mobile app built with Expo React Native, Tailwind CSS, and TypeScript to help users explore and manage art tools. It includes filtering, search, and detailed tool views, with the ability to save favorites locally using Async Storage for offline access.",
    problemStatement:
      "Artists and designers often struggle to keep track of useful digital tools, scattered across platforms with no central way to organize them.",
    solutionOverview:
      "Artzy provides a centralized, intuitive mobile platform to explore, filter, and save art tools for easy access, even offline.",
    responsibilities: [
      "Designed and developed the entire app using React Native.",
      "Implemented smooth interactions using gesture-handler and intuitive layouts with bottom-sheet and masonry-list.",
      "Built UI and logic for search, filter, and local storage using Async Storage.",
      "Managed codebase and versioning via GitHub.",
    ],
    features: [
      "Filter tools by category.",
      "Search and sort tools efficiently.",
      "Save favorite tools locally for offline access.",
    ],
    lessonsLearned: ["Learn and use React Native and local state handling."],
    futurePlans: [
      "Add a tool submission form and cloud sync.",
      "Enable user ratings or tags for each tool.",
    ],
  },
];
