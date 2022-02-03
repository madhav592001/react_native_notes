import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../constants/userConstants';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const login = (config) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    // console.log(config);
    const res = await axios.post(
      'https://madhav-notes-api.herokuapp.com/signin',
      config
    );

    // console.log(res);

    if (res.status === 200) {
      await AsyncStorage.setItem('jwt_token', res.data.jwt_token);
      // AsyncStorage.getItem('jwt_token').then((val) => console.log(val));
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    }

    if (res.status === 210) {
      // console.log(res.data);
      dispatch({ type: LOGIN_FAIL, payload: res.data.msg });
    }

    if(res.status === 201) {
      dispatch({type:LOGIN_FAIL,payload:res.data.message})
    }

  } catch (error) {
    console.log(error);
  }
};
