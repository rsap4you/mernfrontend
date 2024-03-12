import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../commen/header';
import LeftSideMenu from '../commen/left_side_menu';
import Footer from '../commen/footer';

const Faq = () => {
  return (
    <>
      <Helmet>
        <title>Admin Panel | FAQ</title>
      </Helmet>
      <Header />
      <LeftSideMenu />
      <div className="content-page">
        <div className='content'>
        <div className="container mt-5">
          <h2 className="mb-4">Frequently Asked Questions</h2>

          <div className="accordion">
            {/* Question 1 */}
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className="icon">{/* Add an icon here, e.g., <FaChevronDown /> */}</span>
                    Question 1: What is Lorem Ipsum?
                  </button>
                </h5>
              </div>

              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">Answer 1: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span className="icon">{/* Add an icon here, e.g., <FaChevronRight /> */}</span>
                    Question 2: Why do we use it?
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">Answer 2: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
              </div>
            </div>

            {/* Add more questions and answers as needed */}
          </div>
        </div>
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default Faq;
