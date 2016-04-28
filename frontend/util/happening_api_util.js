var AppDispatcher = require('../dispatcher/dispatcher'),
    ServerActions = require('../actions/server_actions');

var HappeningApiUtil = {
  fetchAllHappenings: function(bounds){
    $.ajax({
      url: "api/happenings",
      method: "GET",
      data: {bounds: bounds},
      success: function(happenings){
        ServerActions.receiveAllHappenings(happenings);
      }
    });
  },

  createHappening: function(happening){
    $.ajax({
      url: "api/happenings",
      method: "POST",
      data: {happening: happening},
      success: function(newHappening){
        ServerActions.receiveSingleHappening(newHappening);
      }
    });
  },

  fetchSingleHappening: function(id){
    $.ajax({
      url: "api/happenings/" + id,
      method: "GET",
      success: function(happening){
        ServerActions.receiveSingleHappening(happening);
      }
    });
  }

};

module.exports = HappeningApiUtil;
