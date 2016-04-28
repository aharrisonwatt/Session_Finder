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
    this.listenerToken = UserStore.addListener(this.updateUser);
    if (typeof UserStore.currentUser() === 'undefined'){
      UserActions.fetchCurrentUser();
    }
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
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
