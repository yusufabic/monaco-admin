import React, { useState } from "react";
import { Link } from "react-router-dom";
import Transition from "../../utils/Transition";
import LogoutButton from "../../../../components/logout-button";
import { useAuth } from "../../../../context/AuthContext";

const UserMenu: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div className="relative inline-flex">
      <button
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={user?.imageUrl}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">
            {user?.UserName}
          </span>
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        appear={true}
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 w-52"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div>
          <ul className="flex justify-center items-center">
            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default UserMenu;
