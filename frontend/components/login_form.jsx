var React = require("react");
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var LoginForm = React.createClass({
    mixins: [CurrentUserState],

    getInitialState: function(){
		  return {
        username: '',
        password: ''
      };
    },

    handleSubmit: function(event){
      event.preventDefault();
      UserActions.login({
        username: this.state.username,
        password: this.state.password
		  });
    },

    updatePassword: function(event){
      this.setState({ password: event.target.value});
    },

    updateUsername: function(event){
      this.setState({ username: event.target.value});
    },

    errors: function(){
      if(!this.state.authErrors){
        return;
      }

      var that = this;
      return (
        <div className='login-errors'>
          {
            Object.keys(this.state.authErrors).map(function(key, index){
              return (<li key={index}>{that.state.authErrors[key]}</li>);
            })
          }
        </div>
      );
    },

    form: function(){
      return(
        <div className='auth-form-container'>
          <h3 className='auth-header'>Log In</h3>
          <form className='auth-form' onSubmit={this.handleSubmit}>
        		<label className='auth-form-item'> Username:
        			<input
                type="text"
                value={this.state.username}
                onChange={this.updateUsername}/>
        		</label>

        		<label className='auth-form-item'> Password:
        			<input
                type="password"
                value={this.state.password}
                onChange={this.updatePassword}/>
        		</label>
            <input className='auth-form-item' type="Submit"/>
          </form>
        </div>
      );
    },

    requireLogin: function(){
      if (this.props.error){
        return(
          <h3 className='login-errors'>Please Log In</h3>
        );
      }
    },

    guestLoginButton: function(){
      if (this.props.error){
        return(
          <button className='pure-button' onClick={this.guestLogin}>Guest Login</button>
        );
      }
    },

    guestLogin: function(){
      UserActions.login({
        username: 'guest',
        password: 'password'
      });
    },

    render: function(){
      return(
        <div className="login-form">
          {this.requireLogin()}
          {this.errors()}
          {this.form()}
          {this.guestLoginButton()}
        </div>
      );
    }
});


module.exports = LoginForm;
