import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../constants/userConstants';
import axios from 'axios';

export const login = (config) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    // console.log(config);
  } catch (error) {}
};
