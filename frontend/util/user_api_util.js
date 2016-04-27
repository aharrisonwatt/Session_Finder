var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

module.exports = {
  fetchCurrentUser: function(){
    $.ajax({
      url: "api/session",
      method: "GET",
      success: this.recieveCurrentUser(user),
      error: this.handleError(error)
    });
  },

  login: function(user){
    $.ajax({
      url: "api/session",
      type: "POST",
      data: { user: user},
      success: this.recieveCurrentUser(user),
      error: this.handleError(error)
    });
  },

  logout: function(){
    $.ajax({
      url: "api/session",
      method: "DELETE",
      success: this.removeCurrentUser(),
      error: this.handleError(error)
    });
  },

  create: function(user){
    $.ajax({
      url: "api/user",
      type: "POST",
      data: { user: user},
      success: this.recieveCurrentUser(user),
      error: this.handleError(error)
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
      errors: error.responseJSON.errors
    });
  }
};
