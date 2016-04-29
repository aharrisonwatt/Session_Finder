var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var HappeningConstants = require('../constants/happening_constants');

var HappeningStore = new Store(AppDispatcher);
var _happenings = {};


//API

HappeningStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case HappeningConstants.HAPPENINGS_RECIEVED:
      console.log("Happenings Recieved: ");
      console.log(payload.happenings);
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

HappeningStore.find = function(happeningId){
  return _happenings[happeningId];
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

window.HP = HappeningStore;
module.exports = HappeningStore;
