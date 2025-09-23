import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Employee {
  name: string;
  head: string;
  joiningDate: string;
  contact: string;
}

interface CompanyDirectoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data?: Employee[];
}

export const CompanyDirectoryDialog: React.FC<CompanyDirectoryDialogProps> = ({
  open,
  onOpenChange,
  data,
}) => {
  const defaultData: Employee[] = [
    { name: "Anil Jain", head: "Adish Jain", joiningDate: "12.05.1998", contact: "7988985550" },
    { name: "Neeraj Jain", head: "Adish Jain", joiningDate: "12.05.1998", contact: "7988985550" },
    { name: "Astha Jain", head: "Adish Jain", joiningDate: "12.05.1998", contact: "7988985550" },
  ];

  const employees = data || defaultData;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-3xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Company Directory</DialogTitle>
        </DialogHeader>

        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[#E6E6E6] text-left">
                <th className="px-4 py-2 text-[16px]">Employee Name</th>
                <th className="px-4 py-2 text-[16px]">Reporting Head</th>
                <th className="px-4 py-2 text-[16px]">Date of Joining</th>
                <th className="px-4 py-2 text-[16px]">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 1 ? "bg-[#E6E6E6]" : "bg-[#FEFEFE]"}
                >
                  <td className="px-4 py-2 text-[14px]">{emp.name}</td>
                  <td className="px-4 py-2 text-[14px]">{emp.head}</td>
                  <td className="px-4 py-2 text-[14px]">{emp.joiningDate}</td>
                  <td className="px-4 py-2 text-[14px]">{emp.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
