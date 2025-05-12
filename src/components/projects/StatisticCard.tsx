"use client";

import { RefObject, useEffect, useState } from "react";
import CountUp from "../shared/CountUp";
import { IStatistic } from "@/types/statistic";
import { useTranslations } from "next-intl";

interface StatisticCardProps {
  stat: IStatistic;
  index: number;
  sectionRef: RefObject<HTMLDivElement | null>;
}
const StatisticCard = ({ stat, index, sectionRef }: StatisticCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const tStatistic = useTranslations(`StatisticData.${stat.code}`);

  useEffect(() => {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      // Callback function that runs when the observed element enters or exits the viewport
      ([entry]) => {
        // Check if the observed element is intersecting the viewport (at least 10% visible)
        if (entry.isIntersecting) {
          // Set the visibility state to true when the element is in the viewport
          setIsVisible(true);

          // Stop observing the element once it's visible to avoid repeated triggers
          observer.unobserve(entry.target);
        }
      },

      // Threshold of 0.1 means the callback will be triggered when 10% of the element is in the viewport
      { threshold: 0.1 }
    );

    // Start observing the element referenced by sectionRef (if it exists)
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup function to stop observing the element when the component unmounts or re-renders
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-900"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div className="mb-4 rounded-full bg-gray-100 p-3 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
        <stat.icon className="w-8 h-8" />
      </div>
      <div className="flex items-end text-4xl font-bold text-gray-900 dark:text-white">
        <CountUp end={isVisible ? stat.value : 0} duration={2} />
        <span>{stat.suffix}</span>
      </div>
      <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
        {tStatistic("label")}
      </p>
    </div>
  );
};

export default StatisticCard;
