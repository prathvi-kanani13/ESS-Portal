import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
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
    <Card className="rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] h-[353px] border-none">
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="space-y-1">
          <CardTitle className="text-[#333333] font-bold text-[18px]">
            Your Logs Report
          </CardTitle>
        </div>
        <Select>
          <SelectTrigger className="w-[100px] h-9 text-sm border-[#F0F0F0] rounded-md">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent className="border-[#F0F0F0] bg-[#F9F9F9]">
            <SelectItem value="jan">January</SelectItem>
            <SelectItem value="feb">February</SelectItem>
            <SelectItem value="mar">March</SelectItem>
            <SelectItem value="apr">April</SelectItem>
            <SelectItem value="may">May</SelectItem>
            <SelectItem value="jun">June</SelectItem>
            <SelectItem value="jul">July</SelectItem>
            <SelectItem value="aug">August</SelectItem>
            <SelectItem value="sep">September</SelectItem>
            <SelectItem value="oct">October</SelectItem>
            <SelectItem value="nov">November</SelectItem>
            <SelectItem value="dec">December</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <BarChart
            data={chartData}
            barSize={6}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
            <YAxis
              domain={[0, 100]}
              ticks={[20, 40, 60, 80, 100]}
              tickFormatter={(val) => `${val}%`}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
              interval={0}
              width={28}
            />
            <Bar dataKey="production" stackId="a" fill="var(--color-production)" radius={5} />
            <Bar dataKey="client" stackId="a" fill="var(--color-client)" radius={5} />
            <Bar dataKey="solved" stackId="a" fill="var(--color-solved)" radius={5} />
            <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
