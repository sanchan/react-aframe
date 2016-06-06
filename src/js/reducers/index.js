import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import acomponents from './acomponents';
import users from './users';

let reducer = combineReducers({
  routing: routerReducer,
  acomponents,
  users
});

export default reducer;
