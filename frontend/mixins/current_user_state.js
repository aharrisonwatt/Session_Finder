var UserStore = require('../stores/user_store.js'),
    UserActions = require('../actions/user_actions');

module.exports = {
  getInitialstate: function(){
    return(
      {
        currentUser: UserStore.currentUser(),
        authErrors: UserStore.authErrors ()
      }
    );
  },

  componentDidMount: function() {
    UserStore.addListener(this.updateUser);
    if (!this.state.currentUser){
      UserActions.fetchCurrentUser();
    }
  },

  updateUser: function() {
    this.setState(
      {
        currentUser: UserStore.currentUser(),
        authErrors: UserStore.authErrors ()
      }
    );
  }
};
