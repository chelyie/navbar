import React, { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "메뉴검색", 
  onSearch, 
  className = "" 
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className={`search-container ${className}`}>
      <div className="search-bar">
        <div className="search-icon">
          <div className="pixelated-search">
            <div className="search-circle"></div>
            <div className="search-handle"></div>
          </div>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar; 