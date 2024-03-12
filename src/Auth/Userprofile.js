import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from '../commen/header';
import LeftSideMenu from '../commen/left_side_menu';
import Footer from '../commen/footer';
import { userApiRedux } from '../store/actions/userAction';

const Userprofile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userListResponse = useSelector((state) => state.user || {});
  
  const userData = userListResponse.data?.data?.userList || [];

  useEffect(() => {
    dispatch(userApiRedux()).then((result) => {
      if (result.payload.code === 200) {
        // Handle successful API call
        // navigate("/user-list");
      }
    });
  }, [dispatch]);

  const targetEmail = 'fumurozi@mailinator.com';
  const targetUser = userData.find(user => user.email === targetEmail);

  return (
    <>
      <Helmet>
        <title>Admin Panel | User Profile</title>
      </Helmet>
      <Header />
      <LeftSideMenu />
      <div className="content-page">
        <div className="content" style={{ backgroundColor: "white", marginLeft: "1%" }}>
         
            <div className="card" style={{width:"15%"}} >
              <div className="card-body">
                <h2 className="card-title">User Profile</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>First Name:</label>
                      <p className="card-text">{targetUser.first_name}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Last Name:</label>
                      <p className="card-text">{targetUser.last_name}</p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <p className="card-text">{targetUser.email}</p>
                </div>
                <div className="form-group">
                  <label>Mobile Number:</label>
                  <p className="card-text">{targetUser.mobile_number}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      <Footer />
    </>
  );
};

export default Userprofile;
