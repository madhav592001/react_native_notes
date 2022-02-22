import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

export const userLoginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true };

    case LOGIN_SUCCESS:
      // console.log(action.payload.user);
      return { loading: false, user: action.payload.user };

    case LOGIN_FAIL:
      // console.log(action.payload);
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      AsyncStorage.removeItem('jwt_token');
      return { user: false, error: false };
      
    default:
      return { user: false, error: false };
  }
};

export const userRegisterReducer = (state = { user: false }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      // console.log("REgisteri Request")
      return { loading: true, user: false };

    case REGISTER_SUCCESS:
      // console.log("Register Success")
      return { loading: false, user: true };

    case REGISTER_FAIL:
      // console.log("Register Fail")
      return { loading: false, error: action.payload };

    default:
      return { user: false, error: false };
  }
};
