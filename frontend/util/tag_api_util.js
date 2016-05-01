var AppDispatcher = require('../dispatcher/dispatcher'),
    ServerActions = require('../actions/server_actions');

var TagApiUtil = {
  fetchAllTags: function(){
    $.ajax({
      url: "api/tags",
      method: "GET",
      success: function(tags){
        ServerActions.receiveAllTags(tags);
      }
    });
  }
};

window.TagApi = TagApiUtil;
module.exports = TagApiUtil;
