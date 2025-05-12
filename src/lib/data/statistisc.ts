import { IStatistic } from "@/types/statistic";
import {
  Award,
  Briefcase,
  Clock,
  Languages,
  Newspaper,
  ShieldCheck,
  Users,
} from "lucide-react";

export const statistics: IStatistic[] = [
  {
    value: 125,
    code: "projects",
    id: "projects",
    icon: Briefcase,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 3,
    id: "language",
    code: "language",
    icon: Languages,
    suffix: "",
    label: "Language",
  },
  {
    value: 1,
    code: "yearExp",
    id: "yearExp",
    icon: Clock,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 12,
    code: "certificated",
    id: "certificated",
    icon: ShieldCheck,
    suffix: "",
    label: "Certificated",
  },
  {
    value: 12,
    code: "paper",
    id: "paper",
    icon: Newspaper,
    suffix: "",
    label: "Paper",
  },
  {
    value: 12,
    code: "award",
    id: "award",
    icon: Award,
    suffix: "",
    label: "Award Won",
  },
  {
    value: 84,
    code: "clients",
    id: "clients",
    icon: Users,
    suffix: "%",
    label: "Happy Clients",
  },
];
