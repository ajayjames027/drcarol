import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import '../styles/navbar.css';
import { mentorData } from '../data/mentorData';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Dr. <span>I. Carol</span>
        </Link>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" end>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/qualification-experience" className="nav-links">Qualification & Experience</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/special-talks" className="nav-links">Special Talks</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/patents" className="nav-links">Patents</NavLink>
          </li>
          
          {/* Publications Dropdown */}
          <li className={`nav-item ${activeDropdown === 1 ? 'mobile-dropdown-active' : ''}`}>
            <div className="nav-links" onClick={() => toggleDropdown(1)}>
              Publications <FiChevronDown />
            </div>
            <div className="dropdown-menu">
              <NavLink to="/publications/paper" className="dropdown-link">Paper Publications</NavLink>
              <NavLink to="/publications/proceedings" className="dropdown-link">International Conference Proceedings</NavLink>
              <NavLink to="/publications/paper2" className="dropdown-link">Book Publications</NavLink>
            </div>
          </li>

          {/* Conference Dropdown */}
          <li className={`nav-item ${activeDropdown === 2 ? 'mobile-dropdown-active' : ''}`}>
            <div className="nav-links" onClick={() => toggleDropdown(2)}>
              Conference <FiChevronDown />
            </div>
            <div className="dropdown-menu">
              <NavLink to="/conference/attended" className="dropdown-link">Conferences Attended</NavLink>
              <NavLink to="/conference/workshops" className="dropdown-link">International / National Workshops Attended</NavLink>
            </div>
          </li>

          <li className="nav-item">
            <NavLink to="/gallery" className="nav-links">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-links">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
