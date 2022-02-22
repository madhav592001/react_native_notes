import {
  GET_NOTES_FAIL,
  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS
} from '../constants/notesConstant';

export const getNotesReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case GET_NOTES_REQUEST:
      return { loading: true };

    case GET_NOTES_FAIL:
      return { loading: false, error: action.payload };

    case GET_NOTES_SUCCESS:
      console.log(action.payload)
      return { loading: false, notes: action.payload };

    default:
      return { notes: [], loading: false };
  }
};
