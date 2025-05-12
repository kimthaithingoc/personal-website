"use client";

import { Pie, PieChart } from "recharts";
import { ITeam } from "@/types/project";
import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTranslations } from "next-intl";

interface TeamSizeChartProps {
  team: ITeam[];
}

const TeamSizeChart = ({ team }: TeamSizeChartProps) => {
  const t = useTranslations();
  const chartData = team.map((team, index) => {
    return {
      role: team.role,
      members: team.members,
      fill: `var(--chart-${index + 1})`,
    };
  });

  const chartConfig = {
    members: {
      label: t("ProjectDetail.members"),
    },
    ...Object.fromEntries(
      team.map((team, index) => [
        team.role,
        {
          label: team.role,
          color: `hsl(var(--chart-${index + 1}))`,
        },
      ])
    ),
  } satisfies ChartConfig;

  const teamSize = team
    ? team.reduce((sum, { members }) => sum + members, 0)
    : 1;

  return chartConfig ? (
    <div className="text-center">
      <span className="font-medium text-sm">
        {teamSize} {t("ProjectDetail.members")}
      </span>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-56 text-xs [&_.recharts-text]:fill-background"
      >
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={chartData}
            dataKey="members"
            nameKey="role"
            stroke="none"
            fontSize={12}
          ></Pie>
          <ChartLegend
            content={<ChartLegendContent nameKey="role" />}
            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
          />
        </PieChart>
      </ChartContainer>
    </div>
  ) : null;
};

export default TeamSizeChart;
