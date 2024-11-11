import React from "react";
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
  const location = useLocation();
  const pathname = location.pathname;

  const [isCompactView, setIsCompactView] = React.useState(
    window.innerWidth < 1535
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsCompactView(window.innerWidth < 1535);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavLink
      to={path}
      className={`block text-white ${
        pathname.includes(`${path}`)
          ? "hover:text-textPrimary"
          : "hover:text-textSecondary"
      }`}
      onClick={closeSidebarOnNavLinkClick}
    >
      <div
        className={`flex items-center px-2 py-2 rounded-sm mb-0.5 last:mb-0 ${
          pathname.includes(`${path}`) ? "bg-primary" : "bg-surface-dark"
        }`}
      >
        <svg
          className={`w-6 h-6 flex-shrink-0 ${
            pathname.includes(`${path}`)
              ? "group-hover:text-textPrimary"
              : "group-hover:text-textSecondary"
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className={`fill-current ${
              pathname.includes(`${path}`)
                ? "text-primary-bright"
                : "text-primary"
            }`}
          >
            <polygon points="12,2 2,7 12,12 22,7" />
            <polygon points="12,12 2,17 12,22 22,17" />
            <polygon points="2,7 2,17 12,22 12,12" />
            <polygon points="22,7 22,17 12,22 12,12" />
          </g>
        </svg>
        <span
          className={`text-sm font-medium ml-3 whitespace-nowrap lg:${
            !sidebarOpen && isCompactView ? "hidden" : "opacity-0"
          } 2xl:opacity-100 duration-200`}
        >
          {title}
        </span>
      </div>
    </NavLink>
  );
};

export default SideBarItems;
