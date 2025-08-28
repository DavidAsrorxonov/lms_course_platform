"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive area chart";

const dummyData = [
  { date: "2025-08-28", enrollments: 20 },
  { date: "2025-08-29", enrollments: 14 },
  { date: "2025-08-30", enrollments: 20 },
  { date: "2025-08-31", enrollments: 21 },
  { date: "2025-09-01", enrollments: 19 },
  { date: "2025-09-02", enrollments: 24 },
  { date: "2025-09-03", enrollments: 12 },
  { date: "2025-09-04", enrollments: 23 },
  { date: "2025-09-05", enrollments: 15 },
  { date: "2025-09-06", enrollments: 12 },
  { date: "2025-09-07", enrollments: 27 },
  { date: "2025-09-08", enrollments: 29 },
  { date: "2025-09-09", enrollments: 25 },
  { date: "2025-09-10", enrollments: 27 },
  { date: "2025-09-11", enrollments: 24 },
  { date: "2025-09-12", enrollments: 25 },
  { date: "2025-09-13", enrollments: 11 },
  { date: "2025-09-14", enrollments: 26 },
  { date: "2025-09-15", enrollments: 11 },
  { date: "2025-09-16", enrollments: 14 },
  { date: "2025-09-17", enrollments: 12 },
  { date: "2025-09-18", enrollments: 14 },
  { date: "2025-09-19", enrollments: 21 },
  { date: "2025-09-20", enrollments: 25 },
  { date: "2025-09-21", enrollments: 26 },
  { date: "2025-09-22", enrollments: 21 },
  { date: "2025-09-23", enrollments: 13 },
  { date: "2025-09-24", enrollments: 29 },
  { date: "2025-09-25", enrollments: 24 },
  { date: "2025-09-26", enrollments: 14 },
  { date: "2025-09-27", enrollments: 16 },
  { date: "2025-09-28", enrollments: 19 },
  { date: "2025-09-29", enrollments: 29 },
  { date: "2025-09-30", enrollments: 25 },
];

const chartConfig = {
  enrollments: {
    label: "Enrollments",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Enrollments</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total enrollments for the last 30 days: 1200
          </span>
          <span className="@[540px]/card:hidden">Last 30 days: 1200</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={dummyData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={"date"}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={"preserveStartEnd"}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  labelFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
              }
            />

            <Bar dataKey={"enrollments"} fill="var(--color-enrollments" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
