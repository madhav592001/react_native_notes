import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer,userRegisterReducer } from './reducers/userReducers.js';
import { getNotes } from './actions/notesActions.js';

const reducer = combineReducers({
  userLoginDetails: userLoginReducer,
  userRegisterDetails:userRegisterReducer,
  notes:getNotes,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
