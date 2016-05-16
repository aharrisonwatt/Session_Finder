var React = require("react");
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var SigninForm = React.createClass({
    mixins: [CurrentUserState],

    getInitialState: function(){
		  return {
        username: '',
        password: ''
      };
    },

    guestLoginButton: function(){
      if(this.state.currentUser){
        return;
      }

      return (
        <div>
          <button onClick={this.guestLogin}>Guest Login</button>
        </div>
      );
    },

    guestLogin: function(){
      UserActions.login({
        username: 'guest',
        password: 'password'
      });
    },

    handleSubmit: function(event){
      event.preventDefault();
      UserActions.create({
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
          <h3 className='auth-header'>Sign Up</h3>
          <form className='auth-form' onSubmit={this.handleSubmit}>
        		<label className='auth-form-item'> Username: &nbsp;
        			<input
                type="text"
                value={this.state.username}
                onChange={this.updateUsername}/>
        		</label>

        		<label className='auth-form-item'> Password: &nbsp;
        			<input
                type="password"
                value={this.state.password}
                onChange={this.updatePassword}/>
        		</label >
            <input className='pure-button auth-form-item' type="Submit"/>
          </form>
        </div>
      );
    },

    render: function(){
      return(
        <div className="signin-form">
          {this.errors()}
          {this.form()}
        </div>
      );
    }
});


module.exports = SigninForm;
