import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog";

interface WFHRecord {
  date: string;
  reason: string;
  approvedBy: string;
  status: "Approved" | "Rejected" | "Pending";
}

interface WFHDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data?: WFHRecord[];
}

export const WFHDialog: React.FC<WFHDialogProps> = ({
  open,
  onOpenChange,
  data,
}) => {
  const defaultData: WFHRecord[] = [
    {
      date: "10/02/2025",
      reason: "This is longer content Donec id elit non mi porta gravida at eget metus.",
      approvedBy: "HR",
      status: "Approved",
    },
    {
      date: "10/02/2025",
      reason: "This is longer content Donec id elit non mi porta gravida at eget metus.",
      approvedBy: "HOD",
      status: "Approved",
    },
    {
      date: "10/02/2025",
      reason: "This is longer content Donec id elit non mi porta gravida at eget metus.",
      approvedBy: "HR",
      status: "Rejected",
    },
  ];

  const records = data || defaultData;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-4xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">WFH History</DialogTitle>
        </DialogHeader>

        <div className="overflow-x-auto mt-1">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E6E6E6] text-left">
                <th className="px-4 py-2 text-[16px]">Date Of Apply</th>
                <th className="px-4 py-2 text-[16px]">Resion of applying</th>
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
