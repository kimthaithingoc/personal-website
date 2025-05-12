import ProjectGrid from "@/components/projects/ProjectGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore my projects and creative work across web development, mobile apps, and more.",
};

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-28 xl:px-44 2xl:px-56 space-y-4">
      <ProjectGrid />
    </div>
  );
};

export default Portfolio;
