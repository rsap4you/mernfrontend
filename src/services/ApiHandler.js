import AxiosClientApi from "./AuthService";
// import AxiosClientApiImage from "./AuthserviceImage";

/*==================================================== 
    Auth Routers                                                                              
====================================================== */

export function registerApi(request) {
    return AxiosClientApi.post('v1/user-auth/register', request)
}



export function loginApi(request) {
    console.log(request);
    return AxiosClientApi.post('v1/user-auth/login', request)
}


export function logoutApi(request) {
    return AxiosClientApi.post('v1/user-auth/logout', request)
}

export function userListApi(request) {
    return AxiosClientApi.post('v1/user-auth/userlist', request)
}


export function userEditApi(request) {
    return AxiosClientApi.post('v1/user-auth/edituser', request)
}


export function activeInactiveApi(request) {
    return AxiosClientApi.post('v1/user-auth/active_inactive', request)
}


export function deleteuserApi(request) {
    return AxiosClientApi.post('v1/user-auth/deleteuser', request)
}
