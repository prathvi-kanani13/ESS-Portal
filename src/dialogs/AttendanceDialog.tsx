import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { Check, User, Calendar, Leaf, Clock, MapPin, Coffee, Moon } from "lucide-react";

interface AttendanceItem {
  label: string;
  value: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface AttendanceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data?: AttendanceItem[];
}

export const AttendanceDialog: React.FC<AttendanceDialogProps> = ({ open, onOpenChange, data }) => {
  const defaultData: AttendanceItem[] = [
    { label: "Present", value: 0, icon: Check },
    { label: "Absent", value: 0, icon: User },
    { label: "Holiday", value: 0, icon: Calendar },
    { label: "On leave", value: 0, icon: Leaf },
    { label: "Half Day", value: 0, icon: Clock },
    { label: "On Site", value: 0, icon: MapPin },
    { label: "Week Off", value: 7, icon: Coffee },
    { label: "Late Coming", value: 0, icon: Moon },
  ];

  const attendanceData = data || defaultData;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Attendance Details</DialogTitle>
        </DialogHeader>
        <div className="mt-4 flex flex-col space-y-2">
          {attendanceData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
            >
              <div className="flex items-center gap-1">
                <div className="p-2 rounded-full">
                  <item.icon className="w-6 h-6 text-gray-700" />
                </div>
                <span className="font-medium text-[#333333]">{item.label}</span>
              </div>
              <span className="text-gray-600 font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
