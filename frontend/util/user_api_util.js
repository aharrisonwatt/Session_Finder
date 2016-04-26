var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants')
module.exports = {
  fetchCurrentUser: function(success, error){
    $.ajax({
      url: "api/session",
      method: "GET",
      success: success,
      error: error
    });
  },

  login: function(user){
    $.ajax({
      url: "api/session",
      type: "POST",
      data: { user: user},
      success: this.recieveCurrentUser,
      error: this.handleError
    });
  },

  logout: function(){
    $.ajax({
      url: "api/session",
      method: "DELETE",
      success: success,
      error: error
  },

  create: function(user){
    $.ajax({
      url: "api/user",
      type: "POST",
      data: { user: user},
      success: this.recieveCurrentUser,
      error: this.handleError
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
