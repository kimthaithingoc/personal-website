"use client";

import { useTranslations } from "next-intl";
import { statistics } from "@/lib/data";
import StatisticCard from "./StatisticCard";
import { useRef } from "react";

const Statistic = () => {
  const t = useTranslations("Statistic");
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-4 space-y-5 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="text-center space-y-1">
        <h2 className="text-lg font-bold tracking-tight sm:text-xl">
          {t("title")}
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-400">
          {t("description")}
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
        {statistics.slice(0, 3).map((stat, index) => (
          <StatisticCard
            key={stat.label}
            stat={stat}
            index={index}
            sectionRef={sectionRef}
          />
        ))}
      </div>
    </section>
  );
};

export default Statistic;
