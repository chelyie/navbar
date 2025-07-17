import React from "react";
import type { ReactNode } from "react";
// import './Navbar.css';

interface NavbarProps {
  userName: string;
  productName: string;
  onLogout: () => void;
  children: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({
  userName,
  productName,
  onLogout,
  children,
}) => {
  return (
    <div className="w-full bg-white font-sans border-b border-[#e5e5e5]">
      <div className="flex justify-between items-center px-6 py-4 bg-white">
        <div className="flex-1">
          <span className="text-[#ff6b9d] text-[18px] font-medium">
            {userName} 님
          </span>
        </div>

        {/* Logo and Product Name Section */}
        <div className="flex-2 flex justify-center items-center gap-2">
          <div className="flex items-center">
            <div className="relative flex items-center justify-center">
              <img
                src="/logo.png"
                alt="logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="text-[#4a4a4a] text-[25px] font-semibold ml-1">
              {productName}
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            className="flex items-center gap-1 bg-none border-none cursor-pointer px-3 py-2 rounded-md transition-colors duration-200 hover:bg-transparent"
            onClick={onLogout}
          >
            <img
              src="/logout.png"
              alt="logout"
              className="w-5 h-5 object-contain"
            />
            <span className="text-[#ff6b9d] text-[18px] font-medium">
              로그아웃
            </span>
          </button>
        </div>
      </div>
      <div className="p-0 flex justify-center border-b border-[#f0f0f0] gap-0">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
