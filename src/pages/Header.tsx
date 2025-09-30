import { useLocation } from "react-router-dom";
import { Bell, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback, } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import image from "../assets/record.png";

export function Header() {
    const userName = "Prathvi Kanani";
    const location = useLocation();
    const isDashboard = location.pathname === "/dashboard";

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "Your Password has been changed successfully.",
            description: "If you have not changed it, kindly contact RH.",
            time: "10 min ago",
        },
    ]);

    const removeNotification = (id: number) => {
        setNotifications(notifications.filter((n) => n.id !== id));
    };

    return (
        <div className="flex items-center w-full px-12 py-4 bg-white sticky top-0 z-10">
            {isDashboard && (
                <div className="flex flex-col justify-center min-h-[70px] mr-auto">
                    <h1 className="text-[28px] font-bold text-[#333333] leading-relaxed">
                        Dashboard
                    </h1>
                    <p className="text-[#C4C4C4] text-[17px] font-medium">
                        Hi {userName}
                    </p>
                </div>
            )}

            <div
                className={`flex items-center gap-6 h-[80px] ${isDashboard ? "flex-1 justify-center mx-6" : "ml-auto"
                    }`}
            >
                <button className="flex items-center gap-2">
                    <img src={image} alt="Voice" className="w-10 h-10" />
                    <span className="text-md font-medium text-[#C4C4C4]">
                        Voice Assistance
                    </span>
                </button>

                <div className="flex w-96 items-center">
                    <Input
                        type="text"
                        placeholder="Search by anything"
                        className="h-10 flex-1 rounded-r-none border-r-0 border-gray-300 
                       focus-visible:ring-0 focus-visible:ring-offset-0
                       placeholder:text-[15px] placeholder:text-[#C4C4C4]"
                    />
                    <Button className="h-10 rounded-l-none bg-[#377DFF] px-4">
                        <Search className="h-5 w-5 text-white" />
                    </Button>
                </div>
            </div>

            <div className="flex items-center gap-8 ml-6 h-[80px]">
                {/* Notification Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="relative focus:outline-none">
                            <Bell className="w-8 h-8 text-gray-600" />
                            {notifications.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                    {notifications.length}
                                </span>
                            )}
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        className="w-96 max-h-96 overflow-y-auto shadow-lg border-none bg-[#E1FAEA]"
                        align="end"
                    >
                        <DropdownMenuSeparator />

                        {notifications.length === 0 ? (
                            <DropdownMenuItem className="text-md text-[#0A0A0A] pb-3 font-semibold">
                                No new notifications
                            </DropdownMenuItem>
                        ) : (
                            notifications.map((n) => (
                                <DropdownMenuItem
                                    key={n.id}
                                    className="flex flex-col items-start gap-1 py-3"
                                >
                                    <div className="flex justify-between w-full items-start">
                                        <p className="font-medium text-md text-[#0A0A0A]">{n.title}</p>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Without stopPropagation() → dropdown closes when you click X, With stopPropagation() → dropdown stays open, and only the notification disappears.
                                                removeNotification(n.id);
                                            }}
                                        >
                                            <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600">{n.description}</p>
                                    <span className="text-xs text-blue-600">{n.time}</span>
                                </DropdownMenuItem>
                            ))
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Avatar Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="relative cursor-pointer">
                            <Avatar className="w-10 h-10 border-2 border-yellow-400">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="User Avatar"
                                />
                                <AvatarFallback>PK</AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[200px] p-0 rounded-lg shadow-lg border-[#F0F0F0] bg-[#F9F9F9]"
                        align="end"
                    >
                        <DropdownMenuItem className="w-full py-2 justify-center text-[#8F8F8F] text-base font-medium cursor-pointer hover:bg-gray-100">
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-200 h-[1px] my-0" />
                        <DropdownMenuItem className="w-full py-2 justify-center text-[#8F8F8F] text-base font-medium cursor-pointer hover:bg-gray-100">
                            Sound
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-200 h-[1px] my-0" />
                        <DropdownMenuItem className="w-full py-2 justify-center text-[#8F8F8F] text-base font-medium cursor-pointer hover:bg-gray-100">
                            Setting
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-gray-200 h-[1px] my-0" />
                        <DropdownMenuItem className="w-full py-2 justify-center text-[#8F8F8F] text-base font-medium cursor-pointer hover:bg-gray-100">
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
