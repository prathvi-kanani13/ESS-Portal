import { useLocation } from "react-router-dom";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import image from "../assets/record.png";

export function Header() {
    const userName = "Prathvi Kanani";
    const location = useLocation();
    const isDashboard = location.pathname === "/dashboard";

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
                <div className="relative">
                    <Bell className="w-8 h-8 text-gray-600" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        3
                    </span>
                </div>

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
