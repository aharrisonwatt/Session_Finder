var AppDispatcher = require('../dispatcher/dispatcher'),
    HappeningConstants = require('../constants/happening_constants');

var ServerActions = {
  receiveAllHappenings: function (happenings){
    AppDispatcher.dispatch({
      actionType: HappeningConstants.HAPPENINGS_RECIEVED,
      happenings: happenings
    });
  },

  receiveSingleHappening: function (happening){
    AppDispatcher.dispatch({
      actionType: HappeningConstants.HAPPENING_RECIEVED,
      happening: happening
    });
  }
};

module.exports = ServerActions;
