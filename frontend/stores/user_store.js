var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);


module.exports = UserStore;
