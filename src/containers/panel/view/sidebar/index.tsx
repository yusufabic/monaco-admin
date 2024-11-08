import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../../monaco.webp";
import { useEffect, useRef, useState } from "react";
import SideBarItems from "./sidebar-links";

interface SideBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const sidebar = useRef(null);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event: KeyboardEvent) => {
      const { keyCode } = event;
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const closeSidebarOnNavLinkClick = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };
  const sidebarItems = [
    {
      title: "Home",
      icon: "",
      pathname: "/home",
    },
    {
      title: "Products",
      icon: "",
      pathname: "/products",
    },
    {
      title: "About Us",
      icon: "",
      pathname: "/about-us",
    },
    {
      title: "Originality",
      icon: "",
      pathname: "/originality",
    },
    {
      title: "Collections",
      icon: "",
      pathname: "/collections",
    },
    {
      title: "Where To Buy",
      icon: "",
      pathname: "/where-to-buy",
    },
    {
      title: "Our Works",
      icon: "",
      pathname: "/our-works",
    },
    {
      title: "Contact Us",
      icon: "",
      pathname: "/contact-us",
    },
  ];

  return (
    <div>
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 ${
          sidebarOpen ? "lg:!w-64" : "lg:!w-20"
        } 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex items-start justify-between">
          <NavLink end to="/" className="block">
            <img className="min-w-14 mb-4" src={logo} alt="monaco-chain" />
          </NavLink>
          <div className="lg:hidden">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white"
            >
              X
            </button>
          </div>
        </div>
        <ul>
          {sidebarItems.map((item, index) => (
            <li
              key={item.title}
              className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                pathname.includes(`${item.pathname}`) && "bg-slate-900"
              }`}
            >
              <SideBarItems
                title={item.title}
                path={item.pathname}
                key={index}
                sidebarOpen={sidebarOpen}
                closeSidebarOnNavLinkClick={closeSidebarOnNavLinkClick}
              />
            </li>
          ))}
        </ul>
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className={`w-6 h-6 fill-current ${
                  sidebarOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
