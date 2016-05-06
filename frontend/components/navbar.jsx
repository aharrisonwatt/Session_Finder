var React = require('react'),
    LoginFormModal = require('../modal_helpers/login_form_modal'),
    SignupFormModal = require('../modal_helpers/signin_form_modal'),
    HappeningFormModal = require('../modal_helpers/happening_form_modal'),
    UserActions = require('../actions/user_actions'),
    CurrentUserState = require("../mixins/current_user_state");

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var NavigationBar = React.createClass({
  mixins: [CurrentUserState],

  handleClick: function(){
    hashHistory.push('/');
  },

  greeting: function(){
    if(!this.state.currentUser){
      return;
    }

    return (
      <div className='nav-user-auth'>
        <button onClick={this.logout} className='pure-button'>Logout</button>
      </div>
    );
  },

  logout: function(event){
    event.preventDefault();
    UserActions.logout();
    hashHistory.push('/');
  },

  guestLogin: function(){
    UserActions.login({
      username: 'guest',
      password: 'password'
	  });
  },

  sessionCreation: function(){
    if(document.location.hash.startsWith('#/happening')){
      return (<HappeningFormModal currentUser={this.state.currentUser}/>);
    }
  },

  userAuth: function(){
    if(this.state.currentUser){
      return;
    }

    return (
      <div className='navbar-modal'>
        <div className='form-modal'>
          <button className='pure-button' onClick={this.guestLogin}>Guest Login</button>
        </div>
        <LoginFormModal />
        <SignupFormModal />
      </div>
    );
  },

  render: function() {
    return (
      <div  className='navbar' >
        <h1 onClick={this.handleClick}>Session Finder</h1>
        <div className='navbar-happening-form'>
          {this.sessionCreation()}
        </div>
        <div className='auth-container'>
          {this.greeting()}
          {this.userAuth()}
        </div>
      </div>
    );
  }

});

module.exports = NavigationBar;
