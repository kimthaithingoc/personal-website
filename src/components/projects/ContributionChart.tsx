"use client";

import * as React from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useTranslations } from "next-intl";

interface Props {
  percentage: number;
}
export function ContributionChart({ percentage }: Props) {
  const t = useTranslations();

  const chartData = [
    {
      contribution: "I",
      percentage: percentage,
      fill: "var(--color-safari)",
    },
  ];
  const chartConfig = {
    percentage: { label: t("ProjectDetail.percentage") },
    myContribute: {
      label: t("ProjectDetail.contribution"),
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  const degree = (percentage * 360) / 100;
  return (
    percentage && (
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-10"
      >
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={degree}
          innerRadius={18}
          outerRadius={23}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[20, 16]}
          />
          <RadialBar dataKey="percentage" background cornerRadius={10} />

          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-xs font-bold"
                      >
                        {chartData[0].percentage.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 10}
                        className="fill-muted-foreground text-xs"
                      >
                        %
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    )
  );
}
