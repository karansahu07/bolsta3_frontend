import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../MobileMenu.css'; 
import '../admin/Admin.css';

export default function Navbar() {
        const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
      <div
          style={{
            width: "0%",
            padding: 0,
            margin: 0,
            transition: "width 0.3s ease",
          }}
          className="outer-container"
        >
    
                            {/* Hamburger Icon */}
                            {!isOpen && (
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div style={{display:'flex',position:'fixed',left:0,paddingLeft: '17px',flexDirection: 'column'}}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              </div>
              <img
                    className="img-fluid"
                    src="/bolsta_logo.png"
                    alt="Logo"
                    style={{paddingRight: '10px', width: '120px'}}
                  />
            </div>
          )}
    
    
          {/* Sidebar Menu */}
          <div className={`sidebar-menu ${isOpen ? "open" : ""}`}>
            {/* Close Button */}
            {isOpen && (
              <button className="close-button text-white" onClick={toggleMenu}>
                ✕
              </button>
            )}
            <div style={{backgroundColor: '#243445', minHeight: '30vh'}}>
                <div className='d-flex justify-content-center flex-column align-items-center gap-4'>
                    <img src='/bolsta_logo.png' className='w-50 pt-5' alt='logo'/>
                    <div style={{background: '#fff', width:'75px' , height: '75px'}} className='rounded-circle '></div>
                    <div className='d-flex flex-column align-items-center gap-0'>
                        <h4>Aman Singh</h4>
                        <p className='normal-font'>amansingh@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='navbarbackground ps-5 py-5 d-flex flex-column justify-content-between' style={{minHeight: '70vh'}}>
                <div className='gap-2 d-flex flex-column gap-4'>
                    <Link className='d-flex gap-3 align-items-center'>
                        <img src='/icons/bolstaicon.svg' alt='icon-volsta' />
                        <p className='normal-font m-0 fs-5'>DASHBOARD</p>
                    </Link>
                    <Link className='d-flex gap-3 align-items-center'>
                        <img src='/icons/Trainings.svg' alt='icon-volsta' />
                        <p className='normal-font m-0 fs-5'>Trainings</p>
                    </Link>
                    <Link className='d-flex gap-3 align-items-center'>
                        <img src='/icons/Addaccount.svg' alt='icon-volsta' />
                        <p className='normal-font m-0 fs-5'>Add Account</p>
                    </Link>
                    <Link className='d-flex gap-3 align-items-center'>
                        <img src='/icons/person.svg' alt='icon-volsta' />
                        <p className='normal-font m-0 fs-5'>Person</p>
                    </Link>
                    <Link className='d-flex gap-3 align-items-center'>
                        <img src='/icons/person.svg' alt='icon-volsta' />
                        <p className='normal-font m-0 fs-5'>Plans</p>
                    </Link>
                </div>
                <div>
                     <Link className='d-flex gap-3 align-items-center'>
                        <img src='/icons/upgrade.svg' alt='icon-volsta' />
                        <p className='normal-font m-0 fs-5'>Upgrade</p>
                    </Link>
                </div>
                <div>
                <button className='d-flex gap-3 align-items-center px-4 py-1 border-0'>
                        <img src='/icons/logout.svg' alt='icon-volsta' />
                        <p className='m-0 fs-6'>LOGOUT</p>
                    </button>
                </div>

            </div>
          </div>
        </div>
  )
}
