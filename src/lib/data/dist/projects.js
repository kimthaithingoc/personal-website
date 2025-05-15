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
        metrics: {
            users: [{ platform: enum_1.ProjectPlatform.MobileApp, count: 5 }]
        },
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
        videoDemo: "/images/portfolio/project/allure/Demo.mp4",
        videoThumbnail: "/images/portfolio/project/allure/Demo-Cover.jpg",
        startTime: "2024-10-06",
        endTime: "2025-05-08",
        contribution: {
            percentage: 35,
            role: [enum_1.Role.FrontendDeveloper, enum_1.Role.UIUXDesigner]
        },
        team: [
            { role: enum_1.Role.FrontendDeveloper, members: 3 },
            { role: enum_1.Role.BackendDeveloper, members: 2 },
        ],
        title: "Allure",
        summary: "Allure is an e-commerce platform for authentic beauty products, connecting customers with official brands, KOL livestreams, and professional beauty consultants.",
        description: "Allure is an end-to-end e-commerce solution tailored for the beauty industry. It enables official beauty brands to register, manage product listings (including flash sales, pre-orders, and group buying), and directly sell to customers. The platform also includes features for professional beauty consultants to offer personalized makeup consultations and for KOLs (Key Opinion Leaders) to host live selling events. The system comprises a customer-facing website and app, a management dashboard for admin, operator, brands, consultants, and a KOL interface.",
        problemStatement: "Beauty brands face challenges ensuring product authenticity and customer trust in online channels. Customers often struggle to find genuine products and personalized beauty advice. Consultants have limited platforms for exposure, and engagement between customers and brands/KOLs is often impersonal and transactional.",
        solutionOverview: "Allure solves these issues by enabling official brand onboarding for product authenticity, connecting customers with verified consultants for professional services, and providing real-time, interactive shopping experiences via KOL livestreams—delivering a trusted and engaging shopping journey.",
        responsibilities: [
            "Top #1 contributor on GitHub for the Customer Website, Management Dashboard, and Customer Mobile App repositories.",
            "Developed 70% of the core e-commerce frontend flows, including robust handling for edge cases (e.g., out-of-stock products, inactive listings, invalid cart actions), significantly improving reliability and user experience.",
            "Implemented 85% of the features in the Customer Mobile App using React Native.",
            "Designed 90% of screens and components in Figma, accelerating frontend development by 30%.",
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
        ]
    },
];
