import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface Announcement {
  title: string
  subtitle: string
  icon: string
}

const announcements: Announcement[] = [
  { title: "Confab 25 Easypaypack", subtitle: "Spotify, Singapore - 2 Days ago", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
  { title: "Hr Policy Update", subtitle: "Spotify, Singapore - 6 hours ago", icon: "https://cdn-icons-png.flaticon.com/512/174/174872.png" },
  { title: "Leave Policy Update", subtitle: "San Francisco, CA - 2 Days ago", icon: "https://cdn-icons-png.flaticon.com/512/732/732244.png" },
  { title: "Mobile Usage Policy", subtitle: "New York, US - 2 Days ago", icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
]

export function AnnouncementCard() {
  return (
    <Card className="rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] h-[353px] border-none">
      <CardHeader className="flex flex-row items-center justify-between mb-3">
        <CardTitle className="text-[#333333] font-bold text-[18px]">
          Announcement and Celebration
        </CardTitle>
        <button className="text-md text-black-600 hover:underline">View all</button>
      </CardHeader>
      <CardContent className="space-y-4">
        {announcements.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-[#F9F9F9] p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="flex items-center space-x-2">
              <Avatar className="bg-white rounded-full flex items-center justify-center w-10 h-10">
                <AvatarImage src={item.icon} className="w-7 h-7" />
                <AvatarFallback>IC</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-gray-800">{item.title}</span>
              <span className="text-[12px] font-medium text-[#8F8F8F]">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
