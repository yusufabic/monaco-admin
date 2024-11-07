import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./view/sidebar";
import PanelHeader from "./view/header";
import "./panel.style.less";

const PanelContainer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden antialiased bg-slate-100 font-inter text-slate-600">
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <PanelHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default PanelContainer;
