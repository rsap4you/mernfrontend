import React, { useState } from "react";
import { set } from "react-hook-form";
import { Link, NavLink, useLocation } from 'react-router-dom';

function LeftSideMenu() {
    const location = useLocation();

    const isNavLinkActive = (match, location) => {
        // Check if the NavLink's "to" prop matches the current location
        return match || location.pathname === '/calculator' || location.pathname === '/todo-list' || location.pathname === '/add-restaurant';
    };
    const [kit, setkit] = useState(isNavLinkActive(null, location) ? true : false)
    return (
        <>
            <div className="left side-menu">
                <div className="sidebar-inner slimscrollleft">
                    <div id="sidebar-menu">
                        <ul>
                            <li className="text-muted menu-title">Navigation</li>

                            <li className="has_sub">
                                <NavLink to="/dashboard" className="waves-effect"><i className="ti-home" style={{fontSize:"24px"}}></i> <span> Dashboard </span>
                                </NavLink>
                            </li>
                            <li className="has_sub">
                                <NavLink to="/user-list" className="waves-effect"><i className="fa fa-user" style={{fontSize:"24px"}}></i> <span> User List </span>
                                </NavLink>
                            </li>
                            <li className="has_sub">
                                <NavLink to="/contact_us" className="waves-effect"><i className="fa fa-commenting-o" style={{fontSize:"24px"}}></i> <span>Contact Us </span>
                                </NavLink>
                            </li>
                            {/* <li className="has_sub">
                                <NavLink to="/faq" className="waves-effect"><i className="fa fa-user"></i> <span> Faq </span>
                                </NavLink>
                            </li>

                          
                            <li className="has_sub">
                                <NavLink to="/term_condition" className="waves-effect"><i className="fa fa-user"></i> <span> Terms&Condition </span>
                                </NavLink>
                            </li> */}
                            {/* <li className="has_sub">
                                <NavLink to="/todo-list" className="waves-effect"><i className="fa fa-user"></i> <span> Todo List </span>
                                </NavLink>
                            </li> */}

                            {/* <li className="has_sub" onClick={() => { setkit(!kit) }}>
                                <Link to="#" className="waves-effect"><i className="ti-paint-bucket"></i> <span> Task </span> </Link>
                                <ul className="list-unstyled" style={{ display: kit ? "block" : "" }}>
                                    <li><NavLink to="/calculator">Calculator</NavLink></li>
                                    <li><NavLink to="/todo-list">Todo List</NavLink></li>
                                </ul>
                            </li> */}

                            <li className="has_sub" onClick={() => setkit(!kit)}>
                                <Link to="#" className={`waves-effect  ${isNavLinkActive(null, location) ? 'active subdrop' : ''}`}><i className="fa fa-users" style={{fontSize:"24px"}}></i> <span> CMS </span> </Link>
                                <ul className="list-unstyled" style={{ display: kit ? "block" : "" }}>
                                    <li className={location.pathname === '/faq' ? 'active' : ''}><NavLink to="/faq">FAQ</NavLink></li>
                                    <li className={location.pathname === '/term_condition' ? 'active' : ''}><NavLink to="/term_condition">Terms&Condition</NavLink></li>
                                    
                                </ul>
                            </li>

                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </div >
            </div >
        </>
    )
}

export default LeftSideMenu;