import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";

interface TimeOffDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RequestTimeOffDialog: React.FC<TimeOffDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [reason, setReason] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Request submitted:", { reason, description });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold mb-2">
            Time Off Request
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="flex items-center gap-4">
            <Label htmlFor="reason" className="w-40 text-sm font-medium">
              I need Time off For
            </Label>
            <Select onValueChange={setReason}>
              <SelectTrigger id="reason" className="flex-1">
                <SelectValue placeholder="Select reason" />
              </SelectTrigger>
              <SelectContent className="border-[#F0F0F0] bg-[#F9F9F9]">
                <SelectItem value="vacation">Vacation</SelectItem>
                <SelectItem value="sick">Sick Leave</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-4">
            <Label htmlFor="description" className="w-40 text-sm font-medium">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex-1"
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
