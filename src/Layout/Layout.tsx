import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "../pages/Header";

export default function Layout() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar for desktop & mobile */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <Header />

        {/* Page content */}
        <div className="flex-1 overflow-y-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
