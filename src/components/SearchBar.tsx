import React, { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "메뉴검색",
  onSearch,
  className = "",
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div
      className={`w-full p-4 flex justify-center border-b border-[#f0f0f0] ${className}`}
    >
      <div className="w-full max-w-[800px] relative flex items-center">
        <div className="absolute left-4 flex items-center justify-center">
          <img
            src="/CepSearch.png"
            alt="search"
            className="w-5 h-5 object-contain"
          />
        </div>
        <input
          type="text"
          className="w-full pl-12 pr-4 py-3 border border-[#a8d5f0] rounded-full text-[16px] outline-none transition-colors duration-200 focus:border-[#a8d5f0] placeholder:text-[#9e9e9e]"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
