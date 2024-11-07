import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../../monaco.webp";
import { useEffect, useRef, useState } from "react";

interface SideBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  console.log("🚀 ~ storedSidebarExpanded:", storedSidebarExpanded);
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      const body = document.querySelector("body");
      if (body) {
        body.classList.add("sidebar-expanded");
      }
    } else {
      const body = document.querySelector("body");
      if (body) {
        body.classList.remove("sidebar-expanded");
      }
    }
  }, [sidebarExpanded]);

  return (
    <div>
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 ${
          sidebarExpanded ? "lg:!w-64" : "lg:!w-20"
        } 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
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
          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("home") && "bg-slate-900"
            }`}
          >
            <NavLink
              end
              to="/home"
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                pathname.includes("home") && "hover:text-slate-200"
              }`}
            >
              <div className="flex items-center">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className={`fill-current text-slate-400 ${
                      pathname.includes("home") && "text-indigo-300"
                    }`}
                    d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                  />
                  <path
                    className={`fill-current text-slate-700 ${
                      pathname.includes("home") && "!text-indigo-600"
                    }`}
                    d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                  />
                  <path
                    className={`fill-current text-slate-600 ${
                      pathname.includes("home") && "text-indigo-500"
                    }`}
                    d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                  />
                </svg>
                <span
                  className={`text-sm font-medium ml-3 lg:${
                    sidebarExpanded ? "opacity-100" : "opacity-0"
                  } 2xl:opacity-100 duration-200`}
                >
                  Home
                </span>
              </div>
            </NavLink>
          </li>

          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("products") && "bg-slate-900"
            }`}
          >
            <NavLink
              end
              to="/products"
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                pathname.includes("products") && "hover:text-slate-200"
              }`}
            >
              <div className="flex items-center">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className={`fill-current text-slate-400 ${
                      pathname.includes("products") && "text-indigo-300"
                    }`}
                    d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                  />
                  <path
                    className={`fill-current text-slate-700 ${
                      pathname.includes("products") && "!text-indigo-600"
                    }`}
                    d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                  />
                  <path
                    className={`fill-current text-slate-600 ${
                      pathname.includes("products") && "text-indigo-500"
                    }`}
                    d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Products
                </span>
              </div>
            </NavLink>
          </li>
          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("about-us") && "bg-slate-900"
            }`}
          >
            <NavLink
              end
              to="/about-us"
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                pathname.includes("about-us") && "hover:text-slate-200"
              }`}
            >
              <div className="flex items-center">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className={`fill-current text-slate-400 ${
                      pathname.includes("about-us") && "text-indigo-300"
                    }`}
                    d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                  />
                  <path
                    className={`fill-current text-slate-700 ${
                      pathname.includes("about-us") && "!text-indigo-600"
                    }`}
                    d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                  />
                  <path
                    className={`fill-current text-slate-600 ${
                      pathname.includes("about-us") && "text-indigo-500"
                    }`}
                    d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  About Us
                </span>
              </div>
            </NavLink>
          </li>
          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("originality") && "bg-slate-900"
            }`}
          >
            <NavLink
              end
              to="/originality"
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                pathname.includes("originality") && "hover:text-slate-200"
              }`}
            >
              <div className="flex items-center">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className={`fill-current text-slate-400 ${
                      pathname.includes("originality") && "text-indigo-300"
                    }`}
                    d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                  />
                  <path
                    className={`fill-current text-slate-700 ${
                      pathname.includes("originality") && "!text-indigo-600"
                    }`}
                    d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                  />
                  <path
                    className={`fill-current text-slate-600 ${
                      pathname.includes("originality") && "text-indigo-500"
                    }`}
                    d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Originality
                </span>
              </div>
            </NavLink>
          </li>
          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("collections") && "bg-slate-900"
            }`}
          >
            <NavLink
              end
              to="/collections"
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                pathname.includes("collections") && "hover:text-slate-200"
              }`}
            >
              <div className="flex items-center">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className={`fill-current text-slate-400 ${
                      pathname.includes("collections") && "text-indigo-300"
                    }`}
                    d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                  />
                  <path
                    className={`fill-current text-slate-700 ${
                      pathname.includes("collections") && "!text-indigo-600"
                    }`}
                    d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                  />
                  <path
                    className={`fill-current text-slate-600 ${
                      pathname.includes("collections") && "text-indigo-500"
                    }`}
                    d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Collections
                </span>
              </div>
            </NavLink>
          </li>
          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("where-to-buy") && "bg-slate-900"
            }`}
          >
            <NavLink
              end
              to="/where-to-buy"
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                pathname.includes("where-to-buy") && "hover:text-slate-200"
              }`}
            >
              <div className="flex items-center">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className={`fill-current text-slate-400 ${
                      pathname.includes("where-to-buy") && "text-indigo-300"
                    }`}
                    d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                  />
                  <path
                    className={`fill-current text-slate-700 ${
                      pathname.includes("where-to-buy") && "!text-indigo-600"
                    }`}
                    d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                  />
                  <path
                    className={`fill-current text-slate-600 ${
                      pathname.includes("where-to-buy") && "text-indigo-500"
                    }`}
                    d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Where To Buy
                </span>
              </div>
            </NavLink>
          </li>
          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("our-works") && "bg-slate-900"
            }`}
          >
            <NavLink
              end
              to="/our-works"
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                pathname.includes("our-works") && "hover:text-slate-200"
              }`}
            >
              <div className="flex items-center">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className={`fill-current text-slate-400 ${
                      pathname.includes("our-works") && "text-indigo-300"
                    }`}
                    d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                  />
                  <path
                    className={`fill-current text-slate-700 ${
                      pathname.includes("our-works") && "!text-indigo-600"
                    }`}
                    d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                  />
                  <path
                    className={`fill-current text-slate-600 ${
                      pathname.includes("our-works") && "text-indigo-500"
                    }`}
                    d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Our Works
                </span>
              </div>
            </NavLink>
          </li>
          <li
            className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
              pathname.includes("contact-us") && "bg-slate-900"
            }`}
          >
            <NavLink
              end
              to="/contact-us"
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                pathname.includes("contact-us") && "hover:text-slate-200"
              }`}
            >
              <div className="flex items-center">
                <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    className={`fill-current text-slate-400 ${
                      pathname.includes("contact-us") && "text-indigo-300"
                    }`}
                    d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                  />
                  <path
                    className={`fill-current text-slate-700 ${
                      pathname.includes("contact-us") && "!text-indigo-600"
                    }`}
                    d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                  />
                  <path
                    className={`fill-current text-slate-600 ${
                      pathname.includes("contact-us") && "text-indigo-500"
                    }`}
                    d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                  />
                </svg>
                <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                  Contact Us
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className={`w-6 h-6 fill-current ${
                  sidebarExpanded ? "rotate-180" : ""
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
