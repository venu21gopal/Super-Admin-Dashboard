import React, { useState } from 'react';
import './sidebar.css'; // Import your CSS file
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const showMenu  = () => {
    setMenuOpen(!isMenuOpen);
    setIsMenuVisible(!isMenuVisible);
  };

  const linkColor = document.querySelectorAll('.nav__link');

  const colorLink = (event) => {
    linkColor.forEach((l) => l.classList.remove('active'));
    event.target.classList.add('active');
    setActiveLink(event.target.innerText);
  };

  linkColor.forEach((l) => l.addEventListener('click', colorLink));

  return (
    <div className={`sidebar ${isMenuVisible ? 'show-menu' : ''}`}>
      {/* HEADER */}
      <header className="header">
        <div className="header__container">
          <img src="assets/img/perfil.jpg" alt="" className="header__img" />

           <a href="#" className="header__logo">
            Student Mangement System
          </a> 
         {/* 
          <div className="header__search">
            <input type="search" placeholder="Search" className="header__input" />
            <i className="bx bx-search header__icon"></i>
          </div> */}

          <div className="header__toggle">
            <i className={`bx ${isMenuVisible ? 'bx-x' : 'bx-menu'}`} id="header-toggle" onClick={showMenu}></i>
          </div>
        </div>
      </header>

      {/* NAV */}
      <div className={`nav ${isMenuOpen ? 'show-menu' : ''}`} id="navbar">
        <nav className="nav__container">
          <div>
            <a href="#" className="nav__link nav__logo">
              <i className="bx bxs-disc nav__icon"></i>
              <span className="nav__logo-name">SMS</span>
            </a>

            <div className="nav__list">
              <div className="nav__items">
                < Link to="/parent" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`} >
                <i class="material-symbols-outlined nav__icon">fact_check</i>
                  <span className="nav__name">Exam Result</span>
                  </Link>

                < Link to="/Message" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`} >
                <i class="material-symbols-outlined nav__icon">person</i>
                  <span className="nav__name">Messaging</span>
                  </Link>

                  < Link to="/" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`} >
            <i className="bx bx-log-out nav__icon"></i>
            <span className="nav__name">Log Out</span>
            </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* MAIN */}
    </div>
  );
};

