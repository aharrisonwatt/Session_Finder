var React = require('react'),
    LoginForm = require('./login_form');


var App = React.createClass({

  render: function() {
    return (
      <div>
        <header><h1>Session Finder</h1></header>
        <LoginForm />
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
