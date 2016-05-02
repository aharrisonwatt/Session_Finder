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
    HappeningShow = require('./components/happening_show'),
    Search = require('./components/search'),
    HappeningForm = require('./components/happening_form');

var Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search} />
      <Route path="/happenings" component={Search} />
      <Route path="/happenings/:happeningid" component={HappeningShow} />
      <Route path="/happeningform" component={HappeningForm} />
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  ReactDOM.render(Routes, root);
});
