var AppDispatcher = require('../dispatcher/dispatcher'),
    ServerActions = require('../actions/server_actions');

var HappeningApiUtil = {
  fetchAllHappenings: function(){
    $.ajax({
      url: "api/happenings",
      method: "GET",
      success: function(happenings){
        console.log(happenings);
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
        console.log(newHappening);
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

window.HappeningApiUtil = HappeningApiUtil;

module.exports = HappeningApiUtil;
