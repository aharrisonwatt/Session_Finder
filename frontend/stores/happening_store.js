var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var HappeningConstants = require('../constants/happening_constants');

var HappeningStore = new Store(AppDispatcher);
var _happenings = {};


//API

HappeningStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case HappeningConstants.HAPPENINGS_RECIEVED:
      resetHappenings(payload.happenings);
      this.__emitChange();
      break;
    case HappeningConstants.HAPPENING_RECIEVED:
      addHappening(payload.happening);
      this.__emitChange();
      break;
  }
};

HappeningStore.all = function(){
  return Object.assign({}, _happenings);
};
//Private Methods

function resetHappenings(happenings){
  _happenings = {};

  happenings.forEach(function(happening){
    _happenings[happening.id] = happening;
  });
}

function addHappening(happening){
  _happenings[happening.id] = happening;
}

module.exports = HappeningStore;
