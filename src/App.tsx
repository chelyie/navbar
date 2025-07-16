import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function App() {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleSearch = (value: string) => {
    console.log("Search:", value);
  };

  return (
    <Navbar userName="홍길동" productName="CEP 홈" onLogout={handleLogout}>
      <SearchBar onSearch={handleSearch} />
    </Navbar>
  );
}

export default App;
