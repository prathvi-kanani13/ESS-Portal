import * as React from "react";
import { Card } from "@/components/ui/card";
import { Clock, Building, Code, LayoutGrid, Home, Hourglass, } from "lucide-react";
import { RequestTimeOffDialog } from "../dialogs/RequestTimeOffDialog";
import { CompanyDirectoryDialog } from "../dialogs/CompanyDirectoryDialog";
import { TimeSheetDialog } from "../dialogs/TimeSheetDialog";
import { RequestWFHDialog } from "../dialogs/RequestWFHDialog"
import { RequestODDDialog } from "../dialogs/RequestODDDialog"

interface Shortcut {
  title: string;
  subtitle: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const shortcutsData: Shortcut[] = [
  {
    title: "Request Time Off",
    subtitle: "New York, US - 2 Days ago",
    icon: Clock,
  },
  {
    title: "Company Directory",
    subtitle: "New York, US - 2 Days ago",
    icon: Building,
  },
  {
    title: "Track Re-code",
    subtitle: "New York, US - 2 Days ago",
    icon: Code,
  },
  {
    title: "Fill In Time Sheet",
    subtitle: "New York, US - 2 Days ago",
    icon: LayoutGrid,
  },
  {
    title: "Request WFH",
    subtitle: "New York, US - 2 Days ago",
    icon: Home,
  },
  {
    title: "Request ODD",
    subtitle: "New York, US - 2 Days ago",
    icon: Hourglass,
  },
];

export const ShortcutsCard: React.FC = () => {
  const [timeOffOpen, setTimeOffOpen] = React.useState(false);
  const [directoryOpen, setDirectoryOpen] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const [wfhOpen, setWfhOpen] = React.useState(false);
  const [oddOpen, setOddOpen] = React.useState(false);

  const handleShortcutClick = (shortcut: Shortcut) => {
    if (shortcut.title === "Request Time Off") {
      setTimeOffOpen(true);
    }
    if (shortcut.title === "Company Directory") {
      setDirectoryOpen(true);
    }
    if (shortcut.title === "Fill In Time Sheet") {
      setSheetOpen(true);
    }
    if (shortcut.title === "Request WFH") {
      setWfhOpen(true);
    }
    if (shortcut.title === "Request ODD") {
      setOddOpen(true);
    }
  };

  return (
    <>
      <div className="h-[146px] w-full bg-white rounded-md p-4 shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex flex-col space-y-4 mb-1">
        <div className="text-[#333333] font-bold text-[18px]">Shortcuts</div>

        <div className="grid grid-cols-6 gap-4 w-full h-[140px]">
          {shortcutsData.map((shortcut, index) => (
            <Card
              key={index}
              className="flex flex-row items-center justify-start p-3 bg-[#F9F9F9] space-x-3 h-[58px] border-none mt-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleShortcutClick(shortcut)}
            >
              <div className="bg-white rounded-full p-2 flex items-center justify-center flex-shrink-0">
                <shortcut.icon className="h-5 w-5 text-[#333333]" />
              </div>

              <div className="flex flex-col justify-center">
                <span className="font-bold text-md text-[#333333]">
                  {shortcut.title}
                </span>
                <span className="text-[12px] font-medium text-[#8F8F8F]">
                  {shortcut.subtitle}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Time Off */}
      <RequestTimeOffDialog open={timeOffOpen} onOpenChange={setTimeOffOpen} />

      {/* company Dtrectory */}
      <CompanyDirectoryDialog open={directoryOpen} onOpenChange={setDirectoryOpen} />

      {/* Fill In Time Sheet */}
      <TimeSheetDialog open={sheetOpen} onOpenChange={setSheetOpen} />

      {/* Request WFH */}
      <RequestWFHDialog open={wfhOpen} onOpenChange={setWfhOpen} />

      {/* Request ODD */}
      <RequestODDDialog open={oddOpen} onOpenChange={setOddOpen} />

    </>
  );
};
