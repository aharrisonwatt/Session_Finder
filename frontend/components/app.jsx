var React = require('react'),
    LoginForm = require('./login_form'),
    CurrentUserState = require('../mixins/current_user_state'),
    HappeningIndex = require('./happening_index'),
    Map = require('./map');


var App = React.createClass({
  mixins: [CurrentUserState],

  display: function() {
    if (this.state.currentUser){
      return (
        <div>
          <Map />
          <HappeningIndex />
        </div>
      );
    }
  },

  render: function() {
    return (
      <div>
        <header><h1>Session Finder</h1></header>
        <LoginForm />
        {this.display()}
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
