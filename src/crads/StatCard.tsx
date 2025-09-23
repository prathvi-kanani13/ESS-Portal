import * as React from "react";
import { Card } from "@/components/ui/card";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";
import { AttendanceDialog } from "../dialogs/AttendanceDialog";
import { WFHDialog } from "../dialogs/WFHDialog";
import { LeaveDialog } from "../dialogs/LeaveDialog";

interface Stat {
    title: string;
    value: string;
    change: string;
    sub: string;
    color: string;
    progress: number;
}

export const statsData: Stat[] = [
    { title: "Attendance", value: "1234", change: "+74%", sub: "+14% Inc", color: "bg-[#29AB91]", progress: 74 },
    { title: "WFH/Approvals", value: "10", change: "+74%", sub: "+14% Inc", color: "bg-[#FFA600]", progress: 74 },
    { title: "Leaves", value: "265", change: "+74%", sub: "+14% Inc", color: "bg-[#FF5630]", progress: 74 },
    { title: "Other", value: "658", change: "+74%", sub: "+14% Inc", color: "bg-[#377DFF]", progress: 74 },
    { title: "Other", value: "658", change: "+74%", sub: "+14% Inc", color: "bg-[#377DFF]", progress: 74 },
];

export const StatsCard: React.FC = () => {
    const [attendanceOpen, setAttendanceOpen] = React.useState(false);
    const [wfhOpen, setWfhOpen] = React.useState(false);
    const [openLeave, setOpenLeave] = React.useState(false);

    const handleCardClick = (item: Stat) => {
        if (item.title === "Attendance") {
            setAttendanceOpen(true);
        }
        if (item.title === "WFH/Approvals") {
            setWfhOpen(true);
        }
        if (item.title === "Leaves") {
            setOpenLeave(true);
        }
    };

    return (
        <div className="grid grid-cols-5 gap-6 mb-1">
            {statsData.map((item, idx) => (
                <Card
                    key={idx}
                    className={`rounded-2xl ${item.color} text-white h-[120px] flex flex-row items-start justify-between p-4 cursor-pointer`}
                    onClick={() => handleCardClick(item)}
                >
                    <div className="flex flex-col justify-start gap-2">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-2xl font-bold">{item.value}</p>
                        <div className="flex items-center text-xs opacity-90 gap-1">
                            <div className="bg-white/20 p-1 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-3 h-3 text-white" />
                            </div>
                            <span>{item.sub}</span>
                        </div>
                    </div>

                    <div className="w-20 h-20 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart
                                cx="50%"
                                cy="50%"
                                innerRadius="80%"
                                outerRadius="100%"
                                barSize={6}
                                data={[{ name: "progress", value: item.progress, fill: "#fff" }]}
                                startAngle={90}
                                endAngle={-270}
                            >
                                <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                                <RadialBar dataKey="value" cornerRadius={5} />
                            </RadialBarChart>
                        </ResponsiveContainer>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                            {item.progress}%
                        </span>
                    </div>
                </Card>
            ))}

            {/* Attendance Dialog */}
            <AttendanceDialog open={attendanceOpen} onOpenChange={setAttendanceOpen} />

            {/* WFH Dialog */}
            <WFHDialog open={wfhOpen} onOpenChange={setWfhOpen} />

            {/* Leave Dialog */}
            <LeaveDialog open={openLeave} onOpenChange={setOpenLeave} />
        </div>
    );
};
