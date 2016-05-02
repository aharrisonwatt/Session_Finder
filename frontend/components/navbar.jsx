var React = require('react'),
    LoginForm = require('./login_form');

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var NavigationBar = React.createClass({
  handleClick: function(){
    hashHistory.push('/');
  },

  render: function() {
    return (
      <div  className='navbar' >
        <h1 onClick={this.handleClick}>Session Finder</h1>
        <LoginForm />
      </div>
    );
  }

});

module.exports = NavigationBar;
