import React, { useState } from 'react';
import { FaThLarge, FaStar } from 'react-icons/fa';

const Tabs = () => {
  const [topTab, setTopTab] = useState('menu');

  const topTabs = [
    { id: 'menu', label: '전체 메뉴', icon: <FaThLarge /> },
    { id: 'favorites', label: '즐겨찾기', icon: <FaStar /> },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Horizontal Top Tabs */}
      <div className="flex flex-wrap border-b  border-gray-200 shadow-sm">
        {topTabs.map((tab) => {
          const isActive = topTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setTopTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-bold flex-1 sm:flex-none sm:w-auto border-t-4 ${
                isActive
                  ? 'border-t-[#FF3E9F] bg-gradient-to-r from-[#FF3E9F] to-[#FF5F55] text-white'
                  : 'border-t-transparent bg-white text-gray-400'
              }`}
            >
              <span className={`text-lg ${isActive ? 'text-white' : 'text-gray-400'}`}>
                {tab.icon}
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Area */}
      {topTab === 'menu' && (
        <div className="flex-1 flex items-center justify-center text-gray-300 text-sm sm:text-base">
          전체 메뉴 콘텐츠가 여기에 표시됩니다.
        </div>
      )}

      {topTab === 'favorites' && (
        <div className="flex-1 flex items-center justify-center text-gray-300 text-sm sm:text-base">
          즐겨찾기 항목이 없습니다.
        </div>
      )}
    </div>
  );
};

export default Tabs;
