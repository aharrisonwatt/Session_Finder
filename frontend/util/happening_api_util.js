var AppDispatcher = require('../dispatcher/dispatcher'),
    ServerActions = require('../actions/server_actions');

var HappeningApiUtil = {
  //update this to take bounds and filters
  fetchAllHappenings: function(bounds, filters){
    $.ajax({
      url: "api/happenings",
      method: "GET",
      data: {
        bounds: bounds,
        filters: filters
      },
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
