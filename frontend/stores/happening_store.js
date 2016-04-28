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
  }

//Private Methods

function resetHappenings(happenings){
  _happenings = {};

  happenings.forEach(function(happening){
    _happenings[happening.id] = happening;
  });
}
};
