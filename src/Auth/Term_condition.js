import React from 'react'
import { Helmet } from "react-helmet";

import Header from '../commen/header';
import LeftSideMenu from '../commen/left_side_menu';
import Footer from '../commen/footer';
import Ckeditor from './Ckeditor'
const Term_condition = () => {
    return (
        <>

            <Helmet>
                <title>Admin Panel | Terms&condition </title>
            </Helmet>
            <Header />
            <LeftSideMenu />
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Card 1 */}

                            <Ckeditor />
                            <br />
                        

                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Term_condition