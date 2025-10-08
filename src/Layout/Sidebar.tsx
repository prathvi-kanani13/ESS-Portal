import { cn } from "@/lib/utils";
import { LayoutDashboard, FileText, Book, Briefcase, Users, Calendar, ClipboardCheck, Clock, File, Shield, Lock, Home, Menu as MenuIcon, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/easylogo.png";
import { useState } from "react";

type MenuItem = {
  label: string;
  icon: React.ElementType;
  key: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Menu",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, key: "dashboard" },
      { label: "KYC Document", icon: FileText, key: "kyc-document" },
    ],
  },
  {
    title: "Personal Details",
    items: [
      { label: "Education", icon: Book, key: "education" },
      { label: "Experience", icon: Briefcase, key: "experience" },
      { label: "Family", icon: Users, key: "family" },
    ],
  },
  {
    title: "Organization",
    items: [
      { label: "Leave Application", icon: Calendar, key: "leave-application" },
      { label: "PMS", icon: ClipboardCheck, key: "pms" },
      { label: "Work Logs", icon: Clock, key: "worklogs" },
      { label: "Payslip", icon: File, key: "payslip" },
      { label: "Attendance", icon: Calendar, key: "attendance" },
      { label: "Company Policy", icon: Shield, key: "policy" },
      { label: "Attendance Regularization", icon: ClipboardCheck, key: "regularization" },
      { label: "Change Password", icon: Lock, key: "password" },
      { label: "Request WFH", icon: Home, key: "wfh" },
    ],
  },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeKey = location.pathname.slice(1) || "dashboard";

  const handleSelect = (key: string) => {
    navigate(`/${key}`);
    setMobileOpen(false); // close sidebar on mobile
  };

  return (
    <>
      {/* Mobile sidebar open button set */}
      <div className="md:hidden flex items-center p-3 fixed w-full z-50">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={cn(
          "h-screen bg-white border-r border-[#DBDFED] flex flex-col flex-shrink-0 transition-transform z-50 fixed md:static md:w-[308px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="h-30 flex items-center justify-left p-3">
          <img src={logo} alt="Logo" className="h-17 object-contain ml-3" />
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {menuSections.map((section) => (
            <div key={section.title} className="mb-10">
              <h1 className="text-base font-bold text-gray-800 uppercase mb-3">{section.title}</h1>
              <div className="flex flex-col gap-2">
                {section.items.map(({ label, icon: Icon, key }) => (
                  <button
                    key={key}
                    onClick={() => handleSelect(key)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition w-full text-left",
                      activeKey === key
                        ? "bg-[#377DFF] text-white px-6 py-3"
                        : "text-[#B2B2B2] hover:bg-gray-100"
                    )}
                  >
                    <Icon className={cn("w-5 h-5", activeKey === key ? "text-white" : "text-[#B2B2B2]")} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

    </>
  );
}
