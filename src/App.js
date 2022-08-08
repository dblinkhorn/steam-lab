import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import "react-burger-menu";
import Logo from "./static/images/logo.png";
import Footer from "./components/Footer";
import "./App.css";

const hrStyle = {
    border: "0px",
    borderTop: "1px solid white",
    height: "1px",
};

const App = () => {
    // boolean state to determine if burger menu should be open/close
    const [isOpen, setOpen] = useState(false);

    // toggles between true/false
    const handleIsOpen = () => {
        setOpen(!isOpen);
    };

    // sets state to false; closes menu
    const closeSideBar = () => {
        setOpen(false);
    };

    return (
        <div className='App'>
            {/* Hamburger menu */}
            <Menu
                isOpen={isOpen}
                onOpen={handleIsOpen}
                onClose={handleIsOpen}
                right>
                <NavLink onClick={closeSideBar} to='/'>
                    HOME
                </NavLink>
                <hr style={hrStyle} />
                <NavLink onClick={closeSideBar} to='/mission'>
                    OUR MISSION
                </NavLink>
                <hr style={hrStyle} />
                <NavLink onClick={closeSideBar} to='/about'>
                    ABOUT US
                </NavLink>
                <hr style={hrStyle} />
                <NavLink onClick={closeSideBar} to='/samples'>
                    SAMPLE LESSONS
                </NavLink>
                <hr style={hrStyle} />
                <NavLink onClick={closeSideBar} to='/members'>
                    MEMBERS
                </NavLink>
                <hr style={hrStyle} />
                <NavLink onClick={closeSideBar} to='/contact'>
                    CONTACT US
                </NavLink>
            </Menu>

            {/* Main nav menu */}
            <div className='navigation'>
                <div className='logo-left'>
                    <Link to='/'>
                        <img src={Logo} alt='Logo' />
                    </Link>
                </div>
                <nav className='nav-list'>
                    <ul>
                        <li className='nav-button'>
                            <NavLink to='/' activeclassname='underline'>
                                HOME
                            </NavLink>
                        </li>
                        <li className='nav-button'>
                            <NavLink to='/mission' activeclassname='underline'>
                                OUR MISSION
                            </NavLink>
                        </li>
                        <li className='nav-button'>
                            <NavLink to='/about' activeclassname='underline'>
                                ABOUT US
                            </NavLink>
                        </li>
                        <li className='nav-button'>
                            <NavLink to='/samples' activeclassname='underline'>
                                SAMPLE LESSONS
                            </NavLink>
                        </li>
                        <li className='nav-button'>
                            <NavLink to='/members' activeclassname='underline'>
                                MEMBERS
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='contact-us'>
                    <Link to='/contact'>
                        <button className='button-contact-us'>
                            CONTACT US
                        </button>
                    </Link>
                </div>
            </div>
            <Outlet />
            <div className='footer'>
                <Footer />
            </div>
        </div>
    );
};

export default App;
