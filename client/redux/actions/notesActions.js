import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  GET_NOTES_FAIL,
  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS,
} from '../constants/notesConstant';

export const getNotes = () => async (dispatch) => {
  dispatch({ type: GET_NOTES_REQUEST });

  const jwt = await AsyncStorage.getItem('jwt_token');
  //   console.log(jwt) ;

  const config = {
    headers: {
      authorization: 'Bearer ' + jwt,
    },
  };

  //   console.log(config)

  axios
    .get('https://madhav-notes-api.herokuapp.com/notes', config)
    .then((res) => {
      const notes = res.data.notes;
      // console.log(notes)
      dispatch({ type: GET_NOTES_SUCCESS, payload: notes });
    })
    .catch((err) => {
      // console.log(err)
    });

  //   console.log(res.status);
};
