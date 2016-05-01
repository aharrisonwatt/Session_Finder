var AppDispatcher = require('../dispatcher/dispatcher'),
    HappeningConstants = require('../constants/happening_constants'),
    TagConstants = require('../constants/tag_constants');

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
  },

  receiveAllTags: function (tags){
    console.log('Server Actions Dispatching Tags: ');
    console.log(tags);
    console.log('Action Type: ');
    console.log(TagConstants.TAGS_RECIEVED);
    AppDispatcher.dispatch({
      actionType: TagConstants.TAGS_RECIEVED,
      tags: tags
    });
  }
};

module.exports = ServerActions;
