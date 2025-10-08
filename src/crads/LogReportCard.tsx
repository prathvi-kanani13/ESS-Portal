import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "Jan", production: 65, client: 20, solved: 10 },
  { month: "Feb", production: 55, client: 25, solved: 25 },
  { month: "Mar", production: 20, client: 50, solved: 15 },
  { month: "Apr", production: 40, client: 30, solved: 20 },
  { month: "May", production: 60, client: 25, solved: 20 },
  { month: "Jun", production: 50, client: 35, solved: 15 },
  { month: "Jul", production: 55, client: 30, solved: 25 },
  { month: "Aug", production: 60, client: 25, solved: 20 },
  { month: "Sep", production: 50, client: 30, solved: 25 },
  { month: "Oct", production: 55, client: 25, solved: 20 },
  { month: "Nov", production: 60, client: 30, solved: 20 },
  { month: "Dec", production: 20, client: 45, solved: 15 },
]

const chartConfig = {
  production: { label: "Production Hours", color: "#56CCF2" },
  client: { label: "Client Projects Success", color: "#FFA600CC" },
  solved: { label: "Solved Issues", color: "#FF5630CC" },
} satisfies ChartConfig

export function LogReportCard() {
  return (
    <Card
      className="rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] border-none h-[353px] max-md:h-auto max-md:pb-4 overflow-hidden">
      <CardHeader
        className="flex flex-row items-start justify-between 
        px-6 max-md:px-3"
      >
        <div className="space-y-1">
          <CardTitle className="text-[#333333] font-bold text-[18px] max-md:text-[16px]">
            Your Logs Report
          </CardTitle>
        </div>

        <Select>
          <SelectTrigger className="w-[100px] h-9 text-sm border-[#F0F0F0] rounded-md max-md:w-[85px] max-md:h-8 max-md:text-xs">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent className="border-[#F0F0F0] bg-[#F9F9F9]">
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((m) => (
              <SelectItem key={m} value={m.toLowerCase().slice(0, 3)}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>

      {/* Chart */}
      <CardContent className="px-6 max-md:px-2">
        <div className="h-[280px] w-full max-md:h-[220px]">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                barSize={6}
                margin={{ top: 10, right: 10, left: 5, bottom: 0 }}
              >
                {/* X-Axis */}
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={{
                    fontSize: 12,
                    fill: "#555",
                  }}
                  interval="preserveStartEnd"
                  minTickGap={5}
                />

                {/* Y-Axis */}
                <YAxis
                  domain={[0, 100]}
                  ticks={[20, 40, 60, 80, 100]}
                  tickFormatter={(val) => `${val}%`}
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                  width={30}
                  tick={{ fontSize: 11, fill: "#555" }}
                />

                {/* Bars */}
                <Bar dataKey="production" stackId="a" fill="var(--color-production)" radius={5} />
                <Bar dataKey="client" stackId="a" fill="var(--color-client)" radius={5} />
                <Bar dataKey="solved" stackId="a" fill="var(--color-solved)" radius={5} />

                {/* Legend */}
                <ChartLegend
                  content={<ChartLegendContent />}
                  wrapperStyle={{
                    fontSize: 12,
                    paddingTop: 6,
                  }}
                />

                <ChartTooltip
                  cursor={{ fill: "rgba(0,0,0,0.04)" }}
                  content={
                    <ChartTooltipContent className="rounded-lg border border-gray-100 bg-white shadow-md text-sm p-3 max-md:p-2 max-md:text-[11px] leading-tight"
                      labelStyle={{
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                        color: "#333",
                      }}
                      itemStyle={{
                        fontSize: "0.8rem",
                        lineHeight: "1rem",
                      }}
                    />
                  }
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
