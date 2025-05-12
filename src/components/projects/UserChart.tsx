"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { IUserMetric } from "@/types/project";
import { useTranslations } from "next-intl";

interface Props {
  users: IUserMetric[];
}
export function UserChart({ users }: Props) {
  const t = useTranslations();
  const totalUser = users.reduce((sum, user) => sum + user.count, 0);

  const chartData = users.map((user, index) => {
    return {
      platforms: user.platform,
      users: user.count,
      fill: `var(--chart-${index + 1})`,
    };
  });
  const chartConfig = {
    users: { label: t("ProjectDetail.users") },
    ...Object.fromEntries(
      users.map((user, index) => [
        user.platform,
        { label: user.platform, color: `hsl(var(--chart-${index + 1}))` },
      ])
    ),
  } satisfies ChartConfig;
  return (
    users && (
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-40"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="users"
            nameKey="platforms"
            innerRadius={38}
            strokeWidth={5}
          >
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
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalUser.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        {t("ProjectDetail.users")}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
          <ChartLegend
            content={<ChartLegendContent nameKey="platforms" />}
            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
          />
        </PieChart>
      </ChartContainer>
    )
  );
}
