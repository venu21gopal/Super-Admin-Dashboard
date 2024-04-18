import React, { useState } from 'react';
import './sidebarrr.css';
import { Link } from 'react-router-dom';

export const Sidebarrr = () => {
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
                <Link to="/teacher" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`}>
                <i class="material-symbols-outlined nav__icon">home</i>
                  <span className="nav__name">Dashboard</span>
                </Link>

                <div className="nav__dropdown">
                  <a href="#" className="nav__link">
                  <i class="material-symbols-outlined nav__icon">
back_hand
</i>
                    <span className="nav__name">Attendance</span>
                    </a>

                  <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">

                      <Link to="/MarkSattendancee" className="nav__dropdown-item">
                        Mark Students Attendance  
                      </Link>
                      </div>
                     
                      <div className="nav__dropdown-content">
                      <Link to="/Classwisereportt" className="nav__dropdown-item">
                        Class wise Report
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">
                      <Link to="/StudentAreport" className="nav__dropdown-item">
                        Students Attendance Report 
                      </Link>
                      </div>
                     
                      
                  </div>
                </div>

                
                <div>
                     <Link to="/Home" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`}>
                     
                     <i class="material-symbols-outlined nav__icon">
ink_highlighter
</i>
 <span className="nav__name">Home Work</span>
                     </Link>
                     </div>

                     <div>
                     <Link to="/Mytimetable" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`}>
                     <i class="material-symbols-outlined nav__icon">
note_alt
</i>
<span className="nav__name">My Time Table</span>
                     </Link>
                     </div>

                     <div>
                     <Link to="/Messagingg" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`}>
                     <i class="material-symbols-outlined nav__icon">
chat
</i>
                  <span className="nav__name">Messaging</span>
                     </Link>
                     </div>

                     <div>
                     <Link to="/" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`}>
                     <i class="material-symbols-outlined nav__icon">
lock
</i>
                  <span className="nav__name">Logout</span>
                     </Link>
                     </div>

                     <div>
                     <Link to="/Result" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`}>
                    <i class="material-symbols-outlined nav__icon">
description
</i>
                  <span className="nav__name">Result</span>
                     </Link>
                     </div>

                </div>
            </div>
          </div>

        </nav>
      </div>

      {/* MAIN */}
      {/* <main>
        <section>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates
            magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates
            magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vel illum fuga unde cum, voluptates
            magni molestias eveniet culpa autem ut, totam veniam, suscipit tempore ullam pariatur est at asperiores?
          </p>
        </section>
      </main> */}
    </div>
 
  
  );
};
