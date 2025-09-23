import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface ODDDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RequestODDDialog: React.FC<ODDDialogProps> = ({ open, onOpenChange }) => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Request ODD</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium">Enter ODD Date</label>
            <div className="relative flex-1">
              <Popover>
                <PopoverTrigger asChild>
                  <div>
                    <Input
                      readOnly
                      placeholder="Select Date"
                      value={date ? format(date, "dd-MM-yyyy") : ""}
                      className="cursor-pointer"
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium">Enter Time</label>
            <div className="flex flex-1 items-center gap-5">
              <Input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="flex-1"
              />
              <span className="text-sm">To</span>
              <Input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="flex-1"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
