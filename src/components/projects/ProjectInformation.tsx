import { IProject } from "@/types/project";
import { useTranslations } from "next-intl";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface ProjectDetailProps {
  project: IProject;
}

const ProjectInformation = ({ project }: ProjectDetailProps) => {
  const t = useTranslations();

  const tabs = ["overview", "features", "responsibilities", "lessons"];

  return (
    <div>
      <Tabs defaultValue="overview">
        <TabsList className="flex items-center justify-start w-full overflow-x-auto">
          {tabs.map((tab) => (
            <TabsTrigger key={tab} value={tab} className="cursor-pointer w-fit">
              {t(`ProjectDetail.tab.${tab}`)}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="overview" className="space-y-4 text-justify">
          {/* Description */}
          <div className="space-y-2">
            <h3 className="mb-3 text-lg font-semibold">
              {t("ProjectDetail.description")}
            </h3>
            <p>{project.description}</p>
          </div>

          {/* Problems */}
          <div className="space-y-2">
            <h3 className="mb-3 text-lg font-semibold">
              {t("ProjectDetail.problem")}
            </h3>
            <p>{project.problemStatement}</p>
          </div>

          {/* Solutions */}
          <div className="space-y-2">
            <h3 className="mb-3 text-lg font-semibold">
              {t("ProjectDetail.solution")}
            </h3>
            <p>{project.solutionOverview}</p>
          </div>
        </TabsContent>

        <TabsContent value="features" className="space-y-4 text-justify">
          <h2 className="mb-3 text-lg font-semibold">
            {t("ProjectDetail.features")}
          </h2>
          <ul className="ml-6 list-disc space-y-2">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          {project.achievements && (
            <div>
              <h2 className="mb-3 text-lg font-semibold">
                {t("ProjectDetail.achievements")}
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </TabsContent>
        {project.responsibilities && project.responsibilities.length > 0 && (
          <TabsContent
            value="responsibilities"
            className="space-y-4 text-justify"
          >
            <div>
              <h2 className="mb-3 text-lg font-semibold">
                {t("ProjectDetail.responsibilities")}
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
        )}

        <TabsContent value="lessons" className="space-y-4 text-justify">
          {project.lessonsLearned && project.lessonsLearned.length > 0 && (
            <div>
              <h2 className="mb-3 text-lg font-semibold">
                {t("ProjectDetail.lessons")}
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                {project.lessonsLearned.map((lesson, index) => (
                  <li key={index}>{lesson}</li>
                ))}
              </ul>
            </div>
          )}
          {project.futurePlans && project.futurePlans.length > 0 && (
            <div>
              <h2 className="mb-3 text-lg font-semibold">
                {t("ProjectDetail.futurePlans")}
              </h2>
              <ul className="ml-6 list-disc space-y-2">
                {project.futurePlans.map((plan, index) => (
                  <li key={index}>{plan}</li>
                ))}
              </ul>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectInformation;
