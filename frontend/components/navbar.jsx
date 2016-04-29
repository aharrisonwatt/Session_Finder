var React = require('react'),
    LoginForm = require('./login_form');

var NavBar = React.createClass({

  render: function() {
    return (
      <div  className='navbar' >
        <h1>Session Finder</h1>
        <LoginForm />
      </div>
    );
  }

});

module.exports = NavBar;
