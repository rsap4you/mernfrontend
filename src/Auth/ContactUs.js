import React from 'react'
import { Helmet } from "react-helmet";

import Header from '../commen/header';
import LeftSideMenu from '../commen/left_side_menu';
import Footer from '../commen/footer';

const ContactUs = () => {
    return (
        <>
            <Helmet>
                <title>Admin Panel | Conatct Us </title>
            </Helmet>
            <Header />
            <LeftSideMenu />
            <h2>ContactUs</h2>
            <div className="content-page" >
            {/* <h4 style={{marginLeft:"5%"}}>ContactUs</h4> */}
                <h4 style={{marginLeft:"1%",marginTop:"2%"}}>ContactUs</h4> 
                <div className='content' style={{ marginLeft: "1%" ,backgroundColor:"white"}}>
                 
                          
                                    <div className="table-responsive">
                                 

                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                    <th scope="col">Action</th>
                                                  
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
             
            <Footer/>
        </>
    )
}

export default ContactUs