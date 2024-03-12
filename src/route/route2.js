import { Suspense, lazy, useState, useEffect } from "react";
// Routing
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";


export const Loadable = (Component) => (props) => {
    return (
        <Suspense>
            <Component {...props} />
        </Suspense>
    );
};

const DashBoard = Loadable(lazy(() => import("../Auth/dashboard")));
const Login = Loadable(lazy(() => import("../Auth/login")));
const signup = Loadable(lazy(() => import("../Auth/signup")));
// const Error = Loadable(lazy(() => import("../components/error_page")))
function RoutesPath() {
    // const navigate = useNavigate();
    // useEffect(() => {
    // }, []);
    if (!localStorage.getItem('userData')) {
        return (
            <>
                <BrowserRouter>
                    <div id="wrapper" className="forced">
                        <div>
                            {/* <Link to="/signup" style={{ color: 'white' }}>signup</Link><br></br>
                                    <Link to="/test" style={{ color: 'white' }}>test</Link> */}
                            <Routes>
                                {/* <Route path="/*" element={<Error />} /> */}
                                <Route path="/" element={<Login />} />
                                <Route path="/signup" Component={signup} />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </>
        )
    } else {
        return (
            <>
                <BrowserRouter>
                    <div id="wrapper" className="forced">
                        <div>
                            {/* <Link to="/signup" style={{ color: 'white' }}>signup</Link><br></br>
                                    <Link to="/test" style={{ color: 'white' }}>test</Link> */}
                            <Routes>
                                {/* <Route path="/*" element={<Error />} /> */}
                                {/* <Route path="/user-list" element={<UserList />} />
                    <Route path="/restaurant-list" element={<RestaurantList />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/todo-list" element={<TODO />} />
                    <Route path="/add-restaurant" element={<TodoForm />} /> */}
                                {/* <Route path="/*" element={<Navigate to="/" />} /> */}
                                <Route path="/dashboard" element={<DashBoard />} />
                                {/* <Route path="/edit-user/:userId" element={<EditUser />} />
                    <Route path="/edit-restaurant/:restaurantId" element={<EditRestaurant />} /> */}
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </>
        )
    }
}

export default RoutesPath;