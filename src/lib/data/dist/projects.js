"use strict";
exports.__esModule = true;
exports.projects = void 0;
var enum_1 = require("../constants/enum");
exports.projects = [
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
                category: enum_1.TechStackCategory.Frontend,
                tech: [
                    enum_1.FrontendTech.ReactJs,
                    enum_1.FrontendTech.Typescript,
                    enum_1.FrontendTech.TailwindCSS,
                ]
            },
            {
                category: enum_1.TechStackCategory.Backend,
                tech: [enum_1.BackendTech.ExpressJs]
            },
            {
                category: enum_1.TechStackCategory.Mobile,
                tech: [enum_1.MobileTech.ReactNative]
            },
            {
                category: enum_1.TechStackCategory.Database,
                tech: [enum_1.DatabaseTech.PostgreSQL, enum_1.DatabaseTech.Redis]
            },
            {
                category: enum_1.TechStackCategory.DevOps,
                tech: [enum_1.DevOpsTech.Netlify]
            },
            {
                category: enum_1.TechStackCategory.Others,
                tech: [enum_1.OtherTech.Figma, enum_1.OtherTech.Postman, enum_1.OtherTech.GitHub]
            },
        ],
        platform: [enum_1.ProjectPlatform.WebApp, enum_1.ProjectPlatform.MobileApp],
        category: [enum_1.ProjectCategory.eCommerce],
        resources: [
            { type: enum_1.ResourceType.Demo, url: "https://allure-e.netlify.app/" },
            { type: enum_1.ResourceType.Github, url: "https://github.com/HaHasTeam/" },
            {
                type: enum_1.ResourceType.Document,
                url: "https://drive.google.com/drive/folders/14cnpA3YqPVsqmK7mMd3KAYmYvCvC3GAL?usp=sharing"
            },
            {
                type: enum_1.ResourceType.Figma,
                url: "https://www.figma.com/design/LjKyVNBGdRK5JRsSqz21QZ/Untitled?node-id=0-1&t=zEsGnllQNrWY47KZ-1"
            },
        ],
        videoDemo: "https://www.youtube.com/embed/SA9USKp2QHE",
        videoThumbnail: "/images/portfolio/project/allure/Demo-Cover.jpg",
        startTime: "2024-10-06",
        endTime: "2025-05-08",
        contribution: {
            percentage: 30,
            role: [enum_1.Role.FrontendDeveloper, enum_1.Role.UIUXDesigner]
        },
        team: [
            { role: enum_1.Role.FrontendDeveloper, members: 3 },
            { role: enum_1.Role.BackendDeveloper, members: 2 },
        ],
        title: "Allure",
        summary: "Allure is an e-commerce platform for authentic beauty products, connecting customers with official brands, KOL livestreams, and professional beauty consultants.",
        description: "Allure is an end-to-end e-commerce solution tailored for the beauty industry. It enables official beauty brands to register, manage product listings (including flash sales, pre-orders, and group buying), and directly sell to customers. The platform also includes features for professional beauty consultants to offer personalized makeup consultations and for KOLs (Key Opinion Leaders) to host live selling events. The system comprises a customer-facing website and app, a management dashboard for admin, operator, brands, consultants, as well as a dedicated app for KOLs.",
        problemStatement: "Beauty brands face challenges ensuring product authenticity and customer trust in online channels. Customers often struggle to find genuine products and personalized beauty advice. Consultants have limited platforms for exposure, and engagement between customers and brands/KOLs is often impersonal and transactional.",
        solutionOverview: "Allure solves these issues by enabling official brand onboarding for product authenticity, connecting customers with verified consultants for professional services, and providing real-time, interactive shopping experiences via KOL livestreams—delivering a trusted and engaging shopping journey.",
        responsibilities: [
            "Top #1 contributor on GitHub for the Customer Website, Management Dashboard, and Customer Mobile App repositories.",
            "Developed 70% of the core e-commerce frontend flows, including product browsing, product management, cart management, order processing, and consultant services management, with robust handling for edge cases (e.g., out-of-stock products, inactive listings, invalid cart actions), significantly improving reliability and user experience.",
            "Implemented 85% of the features in the Customer Mobile App using React Native.",
            "Designed 90% of screens and components in Figma, accelerating frontend development by 30%.",
            "Designed technical documentation including Swimlane Diagrams and Screen Flows for better cross-functional collaboration.",
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
        ]
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
                category: enum_1.TechStackCategory.Frontend,
                tech: [
                    enum_1.FrontendTech.ReactJs,
                    enum_1.FrontendTech.Typescript,
                    enum_1.FrontendTech.AntDesign,
                    enum_1.FrontendTech.ScSS,
                ]
            },
            {
                category: enum_1.TechStackCategory.Backend,
                tech: [enum_1.BackendTech.ASPNet]
            },
            {
                category: enum_1.TechStackCategory.Database,
                tech: [enum_1.DatabaseTech.SQLServer]
            },
            {
                category: enum_1.TechStackCategory.Others,
                tech: [enum_1.OtherTech.Figma, enum_1.OtherTech.Postman, enum_1.OtherTech.GitHub]
            },
        ],
        platform: [enum_1.ProjectPlatform.WebApp],
        category: [enum_1.ProjectCategory.InternalTool],
        resources: [
            {
                type: enum_1.ResourceType.Demo,
                url: "https://student-management-system-git-main-hnam-truongs-projects.vercel.app"
            },
            { type: enum_1.ResourceType.Github, url: "https://github.com/ngockim109/fams" },
            {
                type: enum_1.ResourceType.Document,
                url: "https://drive.google.com/drive/folders/1ZbFRJq9cDW0_sQOVn35aGzi-epHJLir9?usp=sharing"
            },
        ],
        videoThumbnail: "/images/portfolio/project/fams/Demo-Cover.png",
        startTime: "2024-01-01",
        endTime: "2024-05-17",
        contribution: {
            percentage: 10,
            role: [enum_1.Role.TeamLead, enum_1.Role.FrontendDeveloper]
        },
        team: [
            { role: enum_1.Role.FrontendDeveloper, members: 8 },
            { role: enum_1.Role.BackendDeveloper, members: 8 },
        ],
        title: "Fresher Academy Management System",
        summary: "FAMS is a web-based platform designed to streamline fresher training management by providing centralized control over students, users, scores, and reservations.",
        description: "Fresher Academy Management System (FAMS) is an internal platform developed for FPT Software to efficiently manage fresher training programs. It supports end-to-end management of student records, user roles, performance scores, and reservation handling",
        problemStatement: "Managing fresher training manually leads to fragmented data, inconsistent reporting, delayed decisions, and inefficient coordination of students, users, and class assignments.",
        solutionOverview: "FAMS addresses these issues with a centralized system that simplifies student, user, score, and reservation management. Real-time tracking, performance evaluation, and import/export features significantly improve training efficiency and data accuracy.",
        responsibilities: [
            "Led an 8-member front-end team, defining coding conventions and setting up CI/CD pipelines with ESLint, Vitest, and Cypress to reduce bugs and accelerate development.",
            "Evaluated and selected front-end technologies (React, TypeScript, Ant Design) to ensure scalability and maintainability.",
            "Developed front-end features, including manage score, reserved student and user.",
            "Mentored team members, conducted code reviews, and wrote unit tests to maintain code quality.",
            "Collaborated with the Product Manager to define the product roadmap and deliver features on schedule.",
        ],
        features: [
            "Student management: add, edit, delete, import/export, search, and status updates.",
            "Reserved list handling: reclass, dropout, remove, remind, and bulk actions.",
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
        ]
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
                category: enum_1.TechStackCategory.Frontend,
                tech: [
                    enum_1.FrontendTech.NextJS,
                    enum_1.FrontendTech.Typescript,
                    enum_1.FrontendTech.TailwindCSS,
                ]
            },
            {
                category: enum_1.TechStackCategory.Backend,
                tech: [enum_1.BackendTech.ExpressJs]
            },
            {
                category: enum_1.TechStackCategory.Mobile,
                tech: [enum_1.MobileTech.ReactNative]
            },
            {
                category: enum_1.TechStackCategory.Database,
                tech: [enum_1.DatabaseTech.PostgreSQL]
            },
            {
                category: enum_1.TechStackCategory.DevOps,
                tech: [enum_1.DevOpsTech.Vercel]
            },
            {
                category: enum_1.TechStackCategory.Others,
                tech: [enum_1.OtherTech.Figma, enum_1.OtherTech.Postman, enum_1.OtherTech.GitHub]
            },
        ],
        metrics: {
            users: [{ platform: enum_1.ProjectPlatform.WebApp, count: 20 }]
        },
        platform: [enum_1.ProjectPlatform.WebApp, enum_1.ProjectPlatform.MobileApp],
        category: [enum_1.ProjectCategory.eCommerce],
        resources: [
            { type: enum_1.ResourceType.Demo, url: "https://pickleplayvietnam.vercel.app/" },
            {
                type: enum_1.ResourceType.Github,
                url: "https://github.com/truongnhatquang21/badminton-fe"
            },
            {
                type: enum_1.ResourceType.Document,
                url: "https://drive.google.com/drive/folders/1OV0lMUHi3TGhr0oea6rPonf7_fLMW6vU?usp=sharing"
            },
        ],
        videoDemo: "https://www.youtube.com/embed/sfObCpy5VGk",
        videoThumbnail: "/images/portfolio/project/pickle-play/Demo-Cover.png",
        startTime: "2024-05-01",
        endTime: "2024-11-01",
        contribution: {
            percentage: 20,
            role: [enum_1.Role.TeamLead, enum_1.Role.FrontendDeveloper]
        },
        team: [
            { role: enum_1.Role.FrontendDeveloper, members: 3 },
            { role: enum_1.Role.BackendDeveloper, members: 2 },
            { role: enum_1.Role.UIUXDesigner, members: 1 },
            { role: enum_1.Role.Marketing, members: 1 },
            { role: enum_1.Role.AIEngineer, members: 1 },
        ],
        title: "PicklePlay",
        summary: "PicklePlay is a mobile and web platform that connects pickleball players with nearby courts, offering easy booking features.",
        description: "PicklePlay is an online platform and mobile app designed to help pickleball players find and book courts conveniently. It provides detailed information about court locations, opening hours, and prices, and fosters a vibrant community of players. The project was developed as part of an entrepreneurship course, with a focus on user convenience and community engagement.",
        problemStatement: "Pickleball players often struggle to find available courts and book them efficiently, leading to wasted time and missed opportunities for community engagement.",
        solutionOverview: "Pickle Play simplifies court discovery and booking with a user-friendly mobile app and web platform, integrating real-time court availability and community features to enhance the pickleball experience.",
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
        ]
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
                category: enum_1.TechStackCategory.Mobile,
                tech: [enum_1.MobileTech.ReactNative]
            },
            {
                category: enum_1.TechStackCategory.Others,
                tech: [enum_1.OtherTech.GitHub]
            },
        ],
        platform: [enum_1.ProjectPlatform.MobileApp],
        category: [enum_1.ProjectCategory.InternalTool],
        resources: [
            { type: enum_1.ResourceType.Github, url: "http://github.com/ngockim109/artzy/" },
        ],
        videoDemo: "https://www.youtube.com/embed/91058kOLrQg",
        videoThumbnail: "/images/portfolio/project/artzy/Demo-Cover.png",
        startTime: "2024-05-10",
        endTime: "2024-05-17",
        title: "Artzy",
        summary: "Artzy: Art Tool Explorer App – A mobile app to browse, search, and save favorite art tools.",
        description: "Artzy is a mobile app built with Expo React Native, Tailwind CSS, and TypeScript to help users explore and manage art tools. It includes filtering, search, and detailed tool views, with the ability to save favorites locally using Async Storage for offline access.",
        problemStatement: "Artists and designers often struggle to keep track of useful digital tools, scattered across platforms with no central way to organize them.",
        solutionOverview: "Artzy provides a centralized, intuitive mobile platform to explore, filter, and save art tools for easy access, even offline.",
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
        ]
    },
];
