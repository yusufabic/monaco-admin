import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";

const UserMenu: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center items-center group">
          <img
            className="w-8 h-8 rounded-full"
            src={user?.ImageUrl}
            width="32"
            height="32"
            alt="User"
          />
          <div className="flex items-center truncate">
            <span className="truncate ml-2 text-sm font-medium group-hover:text-textPrimary">
              {user?.UserName}
            </span>
            <svg
              className="w-3 h-3 shrink-0 ml-1 fill-current text-textSecondary"
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </Menu.Button>
      </div>

      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-surface ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <Link
                to="/"
                className={`${
                  active ? "bg-primary text-white" : "text-textPrimary"
                } block px-4 py-2 text-sm`}
              >
                Anasayfa
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to="/profile"
                className={`${
                  active ? "bg-primary text-white" : "text-textPrimary"
                } block px-4 py-2 text-sm`}
              >
                Profil
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => logout()}
                className={`${
                  active ? "bg-primary text-white" : "text-textPrimary"
                } block px-4 py-2 text-sm w-full text-left`}
              >
                Logout
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default UserMenu;
