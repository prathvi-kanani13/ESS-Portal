import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export function CalendarCard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="w-full lg:w-[70%] h-[353px] rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-[#333333] font-bold text-[18px]">
          Company Calendar
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center px-10">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full max-w-full rounded-md"
          captionLayout="label"
        />
      </CardContent>
    </Card>
  )
}
