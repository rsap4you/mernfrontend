import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import Header from '../commen/header';
import LeftSideMenu from '../commen/left_side_menu';
import { Helmet } from "react-helmet";
import { userApiRedux, activeInactiveApiRedux, deleteUserApiRedux } from '../store/actions/userAction';
import Switch from 'react-switch';
import Swal from 'sweetalert2';

import Paginations from "./Pagination";
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../commen/footer';

function UserList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userListResponse = useSelector((state) => state.user || {});

  const userData = userListResponse.data?.data?.userList || [];
  const [apiCallStatus, setApiCallStatus] = useState(null);
  const [switchChanged, setSwitchChanged] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // for pagination
  const [page_limit, setPageLimit] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);




  useEffect(() => {
    if (apiCallStatus === 'success' || apiCallStatus === 'error' || switchChanged) {
      window.location.reload();
    }
  }, [apiCallStatus, switchChanged]);

  useEffect(() => {
    if (!localStorage.getItem('userData')) {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    dispatch(userApiRedux()).then((result) => {
      if (result.payload.code === 200) {
        // Handle successful API call
        // navigate("/user-list");
      }
    });
  }, [dispatch, switchChanged]);

  useEffect(() => {
    const filteredUserData = userData.filter((user) => {
      const fullName = `${user.first_name} ${user.last_name}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.mobile_number.includes(searchQuery);
    });

    setFilteredData(filteredUserData);
    setCurrentPage(1);
  }, [userData, searchQuery]);



  const currentData = filteredData.slice(
    (currentPage - 1) * page_limit,
    (currentPage - 1) * page_limit + page_limit
  );

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const editUser = (userId) => {
  navigate('/edit_user')
  };

  const deleteuser = (userId) => {
    Swal.fire({
      title: 'Are you sure?',
      width: 400,
      height: 400,
      text: 'You are about to delete the user!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUserApiRedux(userId))
          .then((response) => {
            if (response.payload.code === 200) {
              Swal.fire('Success', 'User deleted successfully', 'success');
              setApiCallStatus('success');
            } else {
              Swal.fire('Error', 'Failed to delete user', 'error');
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire('Error', 'An error occurred while deleting user', 'error');
          });
      }
    });
  };

  const handleSwitchChange = (userId, checked) => {
    console.log('handleSwitchChange');

    // Assuming you have access to dispatch from Redux
    dispatch((dispatch) => {
      Swal.fire({
        title: 'Are you sure?',
        width: 400,
        text: 'You are about to change the user status!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, change it!'
      }).then((result) => {
        if (result.isConfirmed) {
          let request = {
            userId: userId,
            is_active: checked ? '1' : '2'
          };

          // Dispatch the activeInactiveApiRedux action
          dispatch(activeInactiveApiRedux(request))
            .then((response) => {
              if (response.payload.code === 200) {
                Swal.fire('Success', 'User status updated successfully', 'success');
                dispatch(userApiRedux())
              } else {
                Swal.fire('Error', 'Failed to update user status', 'error');
                // Handle any other logic for unsuccessful API call
              }
            })
            .catch((error) => {
              console.error(error);
              Swal.fire('Error', 'An error occurred while updating user status', 'error');
              // Handle any other logic for API call error
            });
        }
      });
    });
  };
  
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
            <h2>Userlist</h2>
            <div className="row">
              <div className="col-md-12">

              </div>  
            </div>
            <div className="table-responsive" style={{ backgroundColor: "white" }}>

              <input
                type="text"
                placeHolder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control mb-2 mr-sm-2"
                style={{ marginLeft: "88%", width: "10%", marginTop: "1%" }} />
                
              <table className="table" style={{ marginTop: "1%" }}>
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Profile Image</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No:</th>
                    <th scope="col">Active</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.length > 0 ? (
                    currentData.map((item, index) => (
                      <tr  scope="row" key={index}>
                        {
                          console.log('item.is_active', item.is_active)
                        }
                        <td>{item._id}</td>
                        <td>{`${item.first_name} ${item.last_name}`}</td>
                        <td>
                          <img
                            src={`http://localhost/react/adminpanel/react_admin_side/my-app/src/utils/image/default.jpg`}
                            width="60"
                            height="50"
                            alt={`Profile of ${item.first_name} ${item.last_name}`}
                            className="img-fluid"
                          />
                        </td>
                        <td>{item.email}</td>
                        <td>{item.mobile_number}</td>
                        <td>
                          <Switch
                            checked={item.is_active === '2' ? false : true}
                            onChange={(checked) => handleSwitchChange(item._id, checked)}
                          />

                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-info"
                         
                            style={{ marginRight: '2%' }}
                         onClick={()=>editUser(item.id)}
                          >
                            Edit
                          </button>
                          <button
                            data-toggle="modal" data-target="#exampleModal"
                            type="button"
                            className=" btn btn-danger"
                            onClick={() => deleteuser(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colspan="7" className="text-center">
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
        
              {
                filteredData.length > page_limit && (
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pagination-wrapper justify-content-end" >
                        <Paginations
                          totalRecords={filteredData.length}
                          pageLimit={page_limit}
                          pageNeighbours={5}
                          onPageChanged={onPageChanged}
                          currentPage={currentPage}
                        />
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>


      </div>

      <Footer />    
    </>
  );
}

export default UserList;
