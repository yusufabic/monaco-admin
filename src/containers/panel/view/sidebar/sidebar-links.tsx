import { NavLink, useLocation } from "react-router-dom";

interface SideBarItemsProps {
  title: string;
  path: string;
  sidebarOpen: boolean;
  closeSidebarOnNavLinkClick: () => void;
}

const SideBarItems: React.FC<SideBarItemsProps> = ({
  title,
  path,
  sidebarOpen,
  closeSidebarOnNavLinkClick,
}) => {
  const { pathname } = useLocation();

  return (
    <NavLink
      end
      to={path}
      className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
        pathname.includes(`${path}`) && "hover:text-slate-200"
      }`}
      onClick={closeSidebarOnNavLinkClick}
    >
      <div className="flex items-center">
        <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
          <path
            className={`fill-current text-slate-400 ${
              pathname.includes(`${path}`) && "text-indigo-300"
            }`}
            d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
          />
          <path
            className={`fill-current text-slate-700 ${
              pathname.includes(`${path}`) && "!text-indigo-600"
            }`}
            d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
          />
          <path
            className={`fill-current text-slate-600 ${
              pathname.includes(`${path}`) && "text-indigo-500"
            }`}
            d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
          />
        </svg>
        <span
          className={`text-sm font-medium ml-3 lg:${
            sidebarOpen ? "opacity-100" : "opacity-0"
          } 2xl:opacity-100 duration-200`}
        >
          {title}
        </span>
      </div>
    </NavLink>
  );
};
export default SideBarItems;
