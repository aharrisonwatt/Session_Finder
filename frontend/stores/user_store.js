var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');

var UserStore = new Store(AppDispatcher);
var _currentUser = null;
var _autherrors = null;



//API
UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.LOGIN:
      login(payload.user);
      this.__emitChange();
      break;
    case UserConstants.ERROR:
      handleError(payload.errors);
      this.__emitChange();
      break;
    case UserConstants.LOGOUT:
      logout();
      this.__emitChange();
      break;
  }
};

UserStore.currentUser = function(){
  return _currentUser;
};

UserStore.authErrors = function(){
  return _autherrors;
};

//private methods
function logout(){
  _currentUser = null;
}

function login(user){
  _currentUser = user;
}

function handleError(error){
  _autherrors = error;
}

module.exports = UserStore;
