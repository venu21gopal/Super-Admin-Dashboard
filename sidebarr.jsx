import React, { useState } from 'react';
import './sidebarr.css'; // Import your CSS file
import { Link } from 'react-router-dom';

export const Sidebarr = () => {
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
    <div className='bodyyyyy'>
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
                <Link to="/admin" className={`nav__link ${activeLink === 'Home' ? 'active-link' : ''}`}>
                <i class="material-symbols-outlined nav__icon">home</i>
                  <span className="nav__name">Dashboard</span>
                </Link>

                
                <div className="nav__dropdown">
                  <a href="#" className="nav__link">
                  <span class="material-symbols-outlined nav__icon">
settings
</span>
                  <span className="nav__name">General Setting</span>
                    </a>

                  <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">

                      <Link to="/InstituteProfile" className="nav__dropdown-item">
                        Institute Profile
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">
                      <Link to="/MarksGrading" className="nav__dropdown-item">
                        Marks Grading
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">
                      <Link to="/Theme" className="nav__dropdown-item">
                        Theme And Language
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">
                      <Link to="/AccountSettings" className="nav__dropdown-item">
                        Account Settings
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">
                      <Link to="/" className="nav__dropdown-item">
                        Logout
                      </Link>
                      </div>
                      
                  </div>
                </div>
                
                
                <div className="nav__dropdown">
                <a href="#" className="nav__link">
                <i class="material-symbols-outlined nav__icon">
rate_review
</i>
                    <span className="nav__name">Classes</span>
                    </a>
                    <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">

                      <Link to="/AllClasses" className="nav__dropdown-item">
                        All Classes
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">

                       <Link to="/Newclass" className="nav__dropdown-item">
                       New Class
                     </Link>
                     </div>
                     <div className="nav__dropdown-content">

                      <Link to="/Editor" className="nav__dropdown-item">
                      Editor Delete
                      </Link>
                      </div>


                     </div>
                      
                  </div>

                  <div className="nav__dropdown">
                <a href="#" className="nav__link">
                <i class="material-symbols-outlined nav__icon">
menu_book
</i>
                    <span className="nav__name">Subjects</span>
                    </a>
                    <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">

                      <Link to="/Withsubject" className="nav__dropdown-item">
                        Classes with Subject
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">

                       <Link to="/Assignsubject" className="nav__dropdown-item">
                       Assign Subject
                     </Link>
                     </div>

                     </div>
                     </div>


                     <div className="nav__dropdown">
                <a href="#" className="nav__link">
                <i class="material-symbols-outlined nav__icon">
person
</i>
                    <span className="nav__name">Students</span>
                    </a>
                    <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">

                      <Link to="/Allstudents" className="nav__dropdown-item">
                        All Students
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">

                       <Link to="/Addnew" className="nav__dropdown-item">
                       Add New
                     </Link>
                     </div>

                     </div>
                     </div>
                  

                     <div className="nav__dropdown">
                <a href="#" className="nav__link">
                <i class="material-symbols-outlined nav__icon">
enterprise
</i>
                    <span className="nav__name">Employees</span>
                    </a>
                    <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">

                      <Link to="/Allemployees" className="nav__dropdown-item">
                        All Employees
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">

                       <Link to="/Addnewemployee" className="nav__dropdown-item">
                       Add New Employee
                     </Link>
                     </div>

                     </div>
                     </div>

                     <div className="nav__dropdown">
                <a href="#" className="nav__link">
                <i class="material-symbols-outlined nav__icon">
account_balance_wallet
</i>
                    <span className="nav__name">Salary</span>
                    </a>
                    <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">

                      <Link to="/Paysalary" className="nav__dropdown-item">
                        Pay Salary
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">

                       <Link to="/Salaryslip" className="nav__dropdown-item">
                       Salary Slip
                     </Link>
                     </div>

                     </div>
                     </div>

                     <div className="nav__dropdown">
                  <a href="#" className="nav__link">
                  <i class="material-symbols-outlined nav__icon">
back_hand
</i>
                    <span className="nav__name">Attendance</span>
                    </a>

                  <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">

                      <Link to="/MarkSattendance" className="nav__dropdown-item">
                        Mark Students Attendance
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">
                      <Link to="/MarkEattendance" className="nav__dropdown-item">
                        Mark Employees Attendance
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">
                      <Link to="/Classwisereport" className="nav__dropdown-item">
                        Class wise Report
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">
                      <Link to="/StudentsAreport" className="nav__dropdown-item">
                        Students Attendance Report 
                      </Link>
                      </div>
                      <div className="nav__dropdown-content">
                      <Link to="/EmployeesAreport" className="nav__dropdown-item">
                      Employees Attendance Report
                      </Link>
                      </div>
                      
                  </div>
                </div>
                 
                 <div>
                     <Link to="/Messaging" className="nav__dropdown-item">
                     
                     <i class="material-symbols-outlined nav__icon">
chat
</i>
                  <span className="nav__name">Messaging</span>
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
    </div>
  );
};

