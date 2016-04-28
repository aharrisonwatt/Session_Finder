var UserApiUtil = require("../util/user_api_util");
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

module.exports = {
  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser(this.receiveCurrentUser, this.handleError);
  },

  login: function(user){
    UserApiUtil.login(user, this.receiveCurrentUser, this.handleError);
  },

  logout: function(){
    UserApiUtil.logout(this.removeCurrentUser, this.handleError);
  },

  create: function(user){
    UserApiUtil.create(user, this.receiveCurrentUser, this.handleError);
  },

  removeCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT
    });
  },

  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error.responseJSON.errors
    });
  }
};
