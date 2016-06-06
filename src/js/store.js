/*jshint esversion: 6 */
import { createStore } from 'redux';

import reducer from './reducers';

window.STATE_FROM_SERVER = {
  acomponents: []
};

let store = createStore(reducer, window.STATE_FROM_SERVER);
window.store = store;

export default store;
