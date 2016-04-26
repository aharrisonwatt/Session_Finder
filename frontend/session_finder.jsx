//react
var React = require('react'),
    ReactDOM = require('react-dom');

//router
var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

//componets
var App = require('./components/app');

var Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  ReactDOM.render(Routes, root);
});
