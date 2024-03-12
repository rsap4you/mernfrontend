import React from 'react'
import Header from '../commen/header';
import LeftSideMenu from '../commen/left_side_menu';
import { Helmet } from "react-helmet";
import Footer from '../commen/footer';
const Edit_userlist = () => {
  return (
   <>
          <Helmet>
        <title>Admin Panel | User List </title>
      </Helmet>
      <Header />
      <LeftSideMenu />
      <div className="content-page">
      <div className="content" style={{ backgroundColor: "white", marginLeft: "1%" }}>
          <div className="container">
        <h1>edit userr</h1>
        </div>
        </div>
        </div>
      <Footer/>
   
   </>
  )
}

export default Edit_userlist