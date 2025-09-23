import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "../pages/Header";

export default function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar fixed */}
      <aside className="w-[309px] h-screen fixed top-0 left-0">
        <Sidebar />
      </aside>

      {/* Main content with header */}
      <main className="ml-[309px] flex-1 h-screen overflow-y-auto flex flex-col">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <div className="flex-1 ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
