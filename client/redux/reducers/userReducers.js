import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
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

    default:
      return {user:false,error:false};
  }
};

export const userRegisterReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { loading: true };

    case REGISTER_SUCCESS:
      return { loading: false };

    case REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return {user:false,error:false}
  }
};
