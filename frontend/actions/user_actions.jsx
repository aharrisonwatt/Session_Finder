var UserApiUtil = require("../util/user_api_util");

module.exports = {
  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser();
  },

  login: function(user){
    UserApiUtil.login(user);
  },

  logout: function(){
    UserApiUtil.logout();
  },

  create: function(user){
    UserApiUtil.create(user);
  },

};
