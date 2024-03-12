import React, { useEffect } from 'react';
import DashBoard from '../Auth/dashboard';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Login from '../Auth/login';
// import signup from '../Auth/signup';
// // import Error from '../error_page';
import UserList from '../Auth/userlist';
import Edit_userlist from '../Auth/Edit_userlist';
import ContactUs from '../Auth/ContactUs';
import Faq from '../Auth/Faq';
import Term_condition from '../Auth/Term_condition';
import Userprofile from '../Auth/Userprofile';
function RoutesPath() {
    return (
        <>
            <BrowserRouter>
                <div id="wrapper" className="forced">
                    <div>
                        {/* <Link to="/signup" style={{ color: 'white' }}>signup</Link><br></br>
                        <Link to="/test" style={{ color: 'white' }}>test</Link> */}
                        <Routes>
                            {
                                !localStorage.getItem('userData') ? (
                                    <>
                                        <Route path="/" element={<Login />} />
                                        <Route path="/*" element={<DashBoard />} />
                                        {/* <Route path="/signup" Component={signup} /> */}
                                    </>

                                ) : (
                                    <>
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/user-list" element={<UserList />} />
                                        <Route path="/userprofile" element={<Userprofile />} />
                                        <Route path="/edit_user" element={<Edit_userlist />} />
                                        <Route path="/contact_us" element={<ContactUs />} />
                                        <Route path="/faq" element={<Faq />} />
                                        <Route path="/term_condition" element={<Term_condition />} />
                                        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
                                        <Route path="/*" element={<Login />} />
                                        <Route path="/dashboard" element={<DashBoard />} />
                                        {/* <Route path="/edit-user/:userId" element={<EditUser />} /> */}
                                  
                                    </>
                                )
                            }
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default RoutesPath;

