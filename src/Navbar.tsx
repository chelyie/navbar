import React, { ReactNode } from 'react';
import './Navbar.css';

interface NavbarProps {
  userName: string;
  productName: string;
  onLogout: () => void;
  children: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ userName, productName, onLogout, children }) => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <div className="header-left">
          <span className="user-name">{userName} 님</span>
        </div>
        
        <div className="header-center">
          <div className="logo">
            <div className="logo-shape">
              <div className="logo-segment orange"></div>
              <div className="logo-segment pink"></div>
              <div className="logo-segment teal"></div>
            </div>
          </div>
          <span className="product-name">{productName}</span>
        </div>
        
        <div className="header-right">
          <button className="logout-button" onClick={onLogout}>
            <span className="logout-arrow">←</span>
            <span className="logout-text">로그아웃</span>
          </button>
        </div>
      </div>
      
      <div className="navbar-content">
        {children}
      </div>
    </div>
  );
};

export default Navbar; 