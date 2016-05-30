/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from 'react-redux';


import store from './store';
import Layout from "./pages/Layout";
import Scene from "./containers/SceneContainer";

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Scene}></IndexRoute>
      </Route>
    </Router>

  </Provider>,
app);

// <Router history={hashHistory}>
//   <Route path="/" component={Layout}>
//     <IndexRoute component={SceneContainer}></IndexRoute>
//   </Route>
// </Router>,
