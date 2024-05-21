// import useAuth from "../services/authService";

// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_ERROR = "LOGIN_ERROR";
// export const LOGOUT = "LOGOUT";

// const authService = useAuth();

// const loginSuccess = user => {
//     return {
//         type: LOGIN_SUCCESS,
//         user
//     };
// };

// const loginError = error => {
//     return {
//         type: LOGIN_ERROR,
//         error
//     };
// };

// export const login = (username, password) => {
//     return dispatch => {
//         authService.login(username, password)
//             .then(data => {
//                 data.message
//                     ? dispatch(loginError(data.message))
//                     : (dispatch(loginSuccess(data)))
//             })
//             .catch(err => dispatch(loginError(err)));
//     }
// }

// export const logout = () => {
//     authService.logout();
//     return {
//         type: LOGOUT
//     };
// }

// AuthActionsComponent.jsx

import useAuth from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

const AuthActionsComponent = () => {
  const authService = useAuth();

  const loginSuccess = (user) => {
    return {
      type: LOGIN_SUCCESS,
      user,
    };
  };

  const loginError = (error) => {
    return {
      type: LOGIN_ERROR,
      error,
    };
  };

  const login = (username, password) => {
    return (dispatch) => {
      authService
        .login(username, password)
        .then((data) => {
          data.message
            ? dispatch(loginError(data.message))
            : dispatch(loginSuccess(data));
        })
        .catch((err) => dispatch(loginError(err)));
    };
  };

  const logout = () => {
    authService.logout();
    return {
      type: LOGOUT,
    };
  };

  return { login, logout };
};
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export default AuthActionsComponent;
