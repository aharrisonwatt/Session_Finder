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
        <div>
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
        <form onSubmit={this.handleSubmit}>
      		<label> Username:
      			<input
              type="text"
              value={this.state.username}
              onChange={this.updateUsername}/>
      		</label>

      		<label> Password:
      			<input
              type="password"
              value={this.state.password}
              onChange={this.updatePassword}/>
      		</label>
          <input type="Submit"/>
        </form>
      );
    },

    render: function(){
      return(
        <div className="signin-form">
          {this.errors()}
          {this.form()}
          {this.guestLoginButton()}
        </div>
      );
    }
});


module.exports = SigninForm;
