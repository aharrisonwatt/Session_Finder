var React = require("react");
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var LoginForm = React.createClass({
    mixins: [CurrentUserState],

    getInitialState: function(){
		  return {
        form: "login",
        username: '',
        password: ''
      };
    },

    setForm: function(event){
      this.setState({form: event.currentTarget.value});
	  },

    logout: function(event){
      event.preventDefault();
      UserActions.logout();
      hashHistory.push('/');
    },

    handleSubmit: function(event){
      event.preventDefault();
      UserActions[this.state.form]({
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
      if(this.state.currentUser){
        return;
      }

      return(
        <form onSubmit={this.handleSubmit}>
          <section>
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
        	</section>

          <section>
            <label> Login
              <input
                type="Radio"
                name="action"
                value="login"
                onChange={this.setForm}/>
            </label>
            <label> Signup
              <input
                type="Radio"
                name="action"
                value="create"
                onChange={this.setForm}/>
            </label>
          <input type="Submit"/>
        </section>

      </form>
      );
    },

    render: function(){
      return(
        <div className="login-form">
          {this.greeting()}
          {this.errors()}
          {this.form()}
          {this.guestLoginButton()}
        </div>
      );
    }
});


module.exports = LoginForm;
