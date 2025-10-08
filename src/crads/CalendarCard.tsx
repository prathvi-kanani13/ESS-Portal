import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export function CalendarCard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="w-full lg:w-[70%] h-auto lg:h-[353px] rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] border-none">
      <CardHeader className="flex flex-row items-center justify-between px-4 sm:px-6">
        <CardTitle className="text-[#333333] font-bold text-[16px] sm:text-[18px] text-center sm:text-left w-full sm:w-auto">
          Company Calendar
        </CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center items-center px-2 sm:px-10 py-4 sm:py-6">
        <div className="w-full max-w-[350px] sm:max-w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-full rounded-md text-xs sm:text-sm"
            captionLayout="label"
          />
        </div>
      </CardContent>
    </Card>
  )
}
