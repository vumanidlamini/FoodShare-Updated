import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotificationComponent = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-end">
        <div className="col-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
              style={{ backgroundColor: '#333', color: '#fff', border: 'none' }}
            >
              <FaBell />
              {notifications.length > 0 && (
                <span className="badge bg-danger" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                  {notifications.length}
                </span>
              )}
            </button>
            <ul
              className={`dropdown-menu ${isOpen ? 'show' : ''}`}
              aria-labelledby="dropdownMenuButton"
              style={{ backgroundColor: '#444', color: '#fff', width: '300px' }}
            >
              {notifications.length === 0 ? (
                <li className="dropdown-item" style={{ backgroundColor: '#444', color: '#fff' }}>
                  No notifications
                </li>
              ) : (
                notifications.map((notification, index) => (
                  <li key={index} className="dropdown-item" style={{ backgroundColor: '#444', color: '#fff' }}>
                    {notification}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;

