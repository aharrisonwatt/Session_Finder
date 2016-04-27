var AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
  fetchAllHappenings: function(){
    $.ajax({
      url: "api/happenings",
      method: "GET",
      success: function(happenings){
        
      }
    });
  }
};
