import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";

interface WFHDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RequestWFHDialog: React.FC<WFHDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  const displayValue =
    date?.from && date?.to
      ? `${format(date.from, "dd-MM-yyyy")} to ${format(
          date.to,
          "dd-MM-yyyy"
        )}`
      : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">WFH Request</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium">I need WFH For</label>
            <div className="relative flex-1">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="relative">
                    <Input
                      readOnly
                      placeholder="Select Date Range"
                      value={displayValue}
                      className="cursor-pointer pr-9"
                    />
                    {date && (
                      <X
                        className="absolute right-8 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-700 cursor-pointer hover:text-gray-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDate(undefined);
                        }}
                      />
                    )}
                    <CalendarIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="p-3">
                  <Calendar
                    mode="range"
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={1}
                  />
                  {date && (
                    <div className="flex justify-end mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setDate(undefined)}
                      >
                        Clear
                      </Button>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-40 text-sm font-medium">Description</label>
            <Input placeholder="Enter description" className="flex-1" />
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
