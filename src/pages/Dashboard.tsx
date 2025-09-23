import { StatsCard } from "../crads/StatCard";
import { ShortcutsCard } from "../crads/ShortcutsCard";
import { LogReportCard } from "../crads/LogReportCard";
import { AnnouncementCard } from "../crads/AnnouncementCard";
import { TaskListCard } from "@/crads/TaskListCard";
import { CalendarCard } from "../crads/CalendarCard";

export default function Dashboard() {

    return (
        <div className="flex flex-col gap-6 w-full px-12 py-6 mb-4">
            {/* stats card */}
            <StatsCard />

            {/* Shortcut */}
            <ShortcutsCard />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                {/* Logs Report */}
                <LogReportCard />

                {/* Announcement & Celebration */}
                <AnnouncementCard />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 w-full">
                {/* task list */}
                <TaskListCard />

                {/* calender */}
                <CalendarCard />
            </div>
        </div>
    );
}
