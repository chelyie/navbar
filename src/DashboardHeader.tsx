import React, { useState } from 'react';

interface DashboardHeaderProps {
  userName: string;
  onSearch: (value: string) => void;
  onLogout?: () => void;
  onHomeClick?: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName,
  onSearch,
  onLogout,
  onHomeClick
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      console.log('로그아웃 clicked');
    }
  };

  const handleHomeClick = () => {
    if (onHomeClick) {
      onHomeClick();
    } else {
      console.log('CEP 홈 clicked');
    }
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side - Greeting and Logo */}
        <div className="flex items-center space-x-6">
          {/* User Greeting */}
          <div className="text-gray-700">
            <span className="text-lg font-medium">{userName} 님</span>
            <span className="text-gray-500 ml-2">안녕하세요!</span>
          </div>

          {/* Logo */}
          <button
            onClick={handleHomeClick}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md"
          >
            {/* Colorful Logo Icon */}
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-br from-orange-400 via-pink-500 to-cyan-400 rounded-sm"></div>
            </div>
            <span className="font-bold text-sm">CEP 홈</span>
          </button>
        </div>

        {/* Center - Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="메뉴검색"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors duration-200"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              {/* Magnifying Glass Icon */}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Right side - Logout */}
        <div className="flex items-center">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200"
          >
            {/* Logout Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>로그아웃</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader; 