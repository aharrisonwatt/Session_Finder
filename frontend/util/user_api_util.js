var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

module.exports = {
  fetchCurrentUser: function(){
    $.ajax({
      url: "api/session",
      method: "GET",
      success: this.recieveCurrentUser(),
      error: this.handleError
    });
  },

  login: function(user){
    $.ajax({
      url: "api/session",
      type: "POST",
      data: { user: user},
      success: this.recieveCurrentUser(user),
      error: this.handleError
    });
  },

  logout: function(){
    $.ajax({
      url: "api/session",
      method: "DELETE",
      success: this.removeCurrentUser(),
      error: this.handleError
    });
  },

  create: function(user){
    $.ajax({
      url: "api/user",
      type: "POST",
      data: { user: user},
      success: this.recieveCurrentUser(user),
      error: this.handleError
    });
  },

  removeCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT
    });
  },

  recieveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  handleError: function(error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error
    });
  }
};
