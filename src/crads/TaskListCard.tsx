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
    <Card className="w-full lg:w-[30%] h-[353px] rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] border-none">
      <CardHeader className="flex flex-row items-center justify-between mb-3">
        <CardTitle className="text-[#333333] font-bold text-lg">
          Task List
        </CardTitle>
        <button className="text-md text-black-600 hover:underline">View all</button>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#F9F9F9] p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="font-medium text-gray-800">
                <ClipboardCheck className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-800">{task.title}</span>
                <span className="text-[12px] font-medium text-[#8F8F8F]">
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
