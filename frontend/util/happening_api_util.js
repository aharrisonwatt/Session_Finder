var AppDispatcher = require('../dispatcher/dispatcher'),
    ServerActions = require('../actions/server_actions');

module.exports = {
  fetchAllHappenings: function(){
    $.ajax({
      url: "api/happenings",
      method: "GET",
      success: function(happenings){
        ServerActions.receiveAllHappenings(happenings);
      }
    });
  },

  createHappenings: function(happening){
    $.ajax({
      url: "api/happenings",
      method: "POST",
      data: {happeing: happening},
      success: function(newHappening){
        ServerActions.receiveSingleHappenings(newHappening);
      }
    });
  },

  fetchSingleHappenings: function(id){
    $.ajax({
      url: "api/happenings/" + id,
      method: "GET",
      success: function(happening){
        ServerActions.receiveSingleHappenings(happening);
      }
    });
  }

};
