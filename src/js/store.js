/*jshint esversion: 6 */
import { createStore, combineReducers } from 'redux';
import acomponents from './reducers/acomponents';

window.STATE_FROM_SERVER = {
  acomponents: []
};

var reducer = combineReducers({
  acomponents
});

let store = createStore(reducer, window.STATE_FROM_SERVER);

export default store;
