import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Check,
  User,
  Calendar,
  Leaf,
  Clock,
  MapPin,
  Coffee,
  Moon,
} from "lucide-react";

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

export const AttendanceDialog: React.FC<AttendanceDialogProps> = ({
  open,
  onOpenChange,
  data,
}) => {
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
      <DialogContent className="max-w-md w-[90%] sm:w-[400px] md:w-[500px] p-4 sm:p-6 rounded-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-center sm:text-left">
            Attendance Details
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 flex flex-col space-y-2">
          {attendanceData.map((item, index) => (
            <div
              key={index}
              className=" flex items-center justify-between p-2 sm:p-3 bg-gray-100 rounded-md">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="p-2 rounded-full">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <span className="font-medium text-[#333333] text-sm sm:text-base">
                  {item.label}
                </span>
              </div>
              <span className="text-gray-600 font-medium text-sm sm:text-base">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
