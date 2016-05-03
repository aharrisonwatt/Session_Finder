var React = require('react'),
    LoginFormModal = require('../modal_helpers/login_form_modal'),
    UserActions = require('../actions/user_actions');

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var NavigationBar = React.createClass({
  handleClick: function(){
    hashHistory.push('/');
  },

  greeting: function(){
    if(!this.state.currentUser){
      return;
    }

    return (
      <div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  },

  logout: function(event){
    event.preventDefault();
    UserActions.logout();
    hashHistory.push('/');
  },

  render: function() {
    return (
      <div  className='navbar' >
        <h1 onClick={this.handleClick}>Session Finder</h1>
        <LoginFormModal />
      </div>
    );
  }

});

module.exports = NavigationBar;
