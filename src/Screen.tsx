import React, { ReactNode } from 'react';
import './Screen.css';

interface ScreenProps {
  userName: string;
  productName: string;
  onLogout: () => void;
  children: ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ userName, productName, onLogout, children }) => {
  return (
    <div className="screen">
      <div className="screen-header">
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
      
      <div className="screen-content">
        {children}
      </div>
    </div>
  );
};

export default Screen; 