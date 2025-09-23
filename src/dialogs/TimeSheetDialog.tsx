import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Sheet {
    name: string;
    projectname: string;
    date: string;
    fromtime: string;
    totime: string;
}

interface TimeSheetDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data?: Sheet[];
}

export const TimeSheetDialog: React.FC<TimeSheetDialogProps> = ({
    open,
    onOpenChange,
    data,
}) => {
    const defaultData: Sheet[] = [
        { name: "Prathvi Kanani", projectname: "ESS Portal", date: "12-02-2025", fromtime: "10:00", totime: "07:00", },
        { name: "Prathvi Kanani", projectname: "ESS Portal", date: "12-02-2025", fromtime: "10:00", totime: "07:00", },
        { name: "Prathvi Kanani", projectname: "ESS Portal", date: "12-02-2025", fromtime: "10:00", totime: "07:00", },
        { name: "Prathvi Kanani", projectname: "ESS Portal", date: "12-02-2025", fromtime: "10:00", totime: "07:00", },
    ];

    const employees = data || defaultData;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full max-w-3xl p-6">
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold">Time Sheet Fill Up</DialogTitle>
                </DialogHeader>

                <div className="overflow-x-auto mt-2">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-[#E6E6E6] text-left">
                                <th className="px-4 py-2 text-[16px]">Name</th>
                                <th className="px-4 py-2 text-[16px]">Project Name</th>
                                <th className="px-4 py-2 text-[16px]">Date</th>
                                <th className="px-4 py-2 text-[16px]">From Time</th>
                                <th className="px-4 py-2 text-[16px]">To Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp, idx) => (
                                <tr
                                    key={idx}
                                    className={idx % 2 === 1 ? "bg-[#E6E6E6]" : "bg-[#FEFEFE]"}
                                >
                                    <td className="px-4 py-2 text-[14px]">{emp.name}</td>
                                    <td className="px-4 py-2 text-[14px]">{emp.projectname}</td>
                                    <td className="px-4 py-2 text-[14px]">{emp.date}</td>
                                    <td className="px-4 py-2 text-[14px]">{emp.fromtime}</td>
                                    <td className="px-4 py-2 text-[14px]">{emp.totime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <DialogFooter>
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                        Save Input
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
