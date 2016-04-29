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
var App = require('./components/app'),
    HappeningShow = require('./components/happening_show');

var Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/happenings/:happeningid" component={HappeningShow} />
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  ReactDOM.render(Routes, root);
});
