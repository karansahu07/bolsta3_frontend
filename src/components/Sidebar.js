import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigations } from '../navigations';
const iconmap = {
    bolsta: "/icons/bolstaicon.svg",
    addaccount: "/icons/Addaccount.svg",
    training: "/icons/Trainings.svg",
    person: "/icons/person.svg",
    upgrade: "/icons/upgrade.svg"
}
export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const rendernavitem = (navigations) => {
        return navigations.map((navitem, index) => {
            return <Link className='d-flex gap-3 align-items-center' to={navitem.path}>
                <img src={iconmap[navitem.icon]} alt='icon-volsta' />
                <p className='normal-font m-0 fs-5'>{navitem.name}</p>
            </Link>
        })
    };
console.log(rendernavitem(navigations) , navigations);
    return (
        <div
            style={{
                padding: 0,
                margin: 0,
                height: '100%',

            }}
            className="cus-sidebar d-flex flex-column">

            {/* Hamburger Icon */}
            {!isOpen && (
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div style={{ display: 'flex', position: 'fixed', left: 0, paddingLeft: '17px', flexDirection: 'column' }}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <img
                        className="img-fluid"
                        src="/bolsta_logo.png"
                        alt="Logo"
                        style={{ paddingRight: '10px', width: '120px' }}
                    />
                </div>
            )}


            {/* Sidebar Menu */}
            <div className={`sidebar-menu navbarbackground d-flex flex-column ${isOpen ? "open" : ""}`}>
                {/* Close Button */}
                {isOpen && (
                    <button className="close-button text-white" onClick={toggleMenu}>
                        ✕
                    </button>
                )}
                <div style={{ backgroundColor: '#243445', minHeight: '280px' }}>
                    <div className='d-flex justify-content-center flex-column align-items-center gap-4'>
                        <img src='/bolsta_logo.png' className='w-50 pt-5' alt='logo' />
                        <div style={{ background: '#fff', width: '75px', height: '75px' }} className='rounded-circle '></div>
                        <div className='d-flex flex-column align-items-center gap-0'>
                            <h4>Aman Singh</h4>
                            <p className='normal-font'>amansingh@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='p-3' style={{ flexGrow: 1, }}>
                    <div className='gap-2 d-flex flex-column gap-4'>
                        {rendernavitem(navigations)}
                    </div>

                </div>
                <div className=' ps-3 ps-md-5 py-5 d-flex flex-column justify-content-between' style={{ minHeight: '100px' }}>

                    <div>
                        <Link to='/'>
                            <button className='d-flex gap-3 align-items-center px-4 py-1 border-0'>
                                <img src='/icons/logout.svg' alt='icon-volsta' />
                                <p className='m-0 fs-6'>LOGOUT</p>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
