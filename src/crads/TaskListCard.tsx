import { ClipboardCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Task {
  title: string
  subtitle: string
}

const tasks: Task[] = [
  { title: "Katanax Web rewap", subtitle: "Spotify, Singapore - 2 Days ago" },
  { title: "Costume Sales Dashboard", subtitle: "Spotify, Singapore - 6 hours ago" },
  { title: "ESS Dashboard design", subtitle: "San Francisco, CA - 2 Days ago" },
  { title: "Mobile Usage Policy", subtitle: "New york, US - 2 Days ago" },
]

export function TaskListCard() {
  return (
    <Card className="w-full lg:w-[30%] h-[353px] rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] border-none max-md:h-auto max-md:pb-4 overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between mb-3 px-6 max-md:px-3">
        <CardTitle className="text-[#333333] font-bold text-lg max-md:text-[16px] truncate">
          Task List
        </CardTitle>
        <button className="text-md text-black-600 hover:underline max-md:text-[13px] whitespace-nowrap">
          View all
        </button>
      </CardHeader>

      <CardContent className="px-6 max-md:px-3 overflow-y-auto max-h-[270px] max-md:max-h-[auto]">
        <div className="flex flex-col space-y-4 max-md:space-y-3">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#F9F9F9] p-2 rounded-lg hover:bg-gray-100 transition max-md:gap-3 max-md:p-2">
              <div className="flex-shrink-0 text-gray-800">
                <ClipboardCheck className="h-5 w-5 max-md:h-4 max-md:w-4" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="font-medium text-gray-800 text-[15px] max-md:text-[13px] leading-tight truncate">
                  {task.title}
                </span>
                <span className="text-[12px] font-medium text-[#8F8F8F] max-md:text-[11px] truncate">
                  {task.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
