var AppDispatcher = require('../dispatcher/dispatcher'),
    HappeningConstants = require('../constants/happening_constants');

var ServerActions = {
  receiveAllHappenings: function (happenings){
    AppDispatcher.dispatch({
      actiontype: HappeningConstants.HAPPENINGS_RECIEVED,
      happenings: happenings
    });
  }
};

module.exports = ServerActions;
