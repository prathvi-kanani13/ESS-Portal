import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";

interface LeaveRecord {
  date: string;
  reason: string;
  approvedBy: string;
  status: "Approved" | "Rejected" | "Pending";
}

interface LeaveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data?: LeaveRecord[];
}

export const LeaveDialog: React.FC<LeaveDialogProps> = ({
  open,
  onOpenChange,
  data,
}) => {
  const defaultData: LeaveRecord[] = [
    {
      date: "05/02/2025",
      reason: "Family emergency leave",
      approvedBy: "HR",
      status: "Approved",
    },
    {
      date: "07/02/2025",
      reason: "Medical leave for check-up",
      approvedBy: "Manager",
      status: "Pending",
    },
    {
      date: "12/02/2025",
      reason: "Vacation",
      approvedBy: "HR",
      status: "Rejected",
    },
  ];

  const records = data || defaultData;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-4xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Leave History</DialogTitle>
        </DialogHeader>

        <div className="overflow-x-auto mt-1">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E6E6E6] text-left">
                <th className="px-4 py-2 text-[16px]">Date Of Apply</th>
                <th className="px-4 py-2 text-[16px]">Reason of applying</th>
                <th className="px-4 py-2 text-[16px]">Approved By</th>
                <th className="px-4 py-2 text-[16px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 1 ? "bg-[#E6E6E6]" : "bg-[#FEFEFE]"}
                >
                  <td className="px-4 py-2 text-[14px]">{row.date}</td>
                  <td className="px-4 py-2 text-[14px]">{row.reason}</td>
                  <td className="px-4 py-2 text-[14px]">{row.approvedBy}</td>
                  <td
                    className={`px-4 py-2 text-[14px] ${row.status === "Approved"
                        ? "text-green-600"
                        : row.status === "Rejected"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                  >
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
