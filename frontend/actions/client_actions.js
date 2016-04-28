var HappeningApiUtil = require('../util/happening_api_util');

var ClientActions = {
  fetchAllHappenings: function(bounds){
    HappeningApiUtil.fetchAllHappenings(bounds);
  },

  fetchSingleHappening: function(id){
    HappeningApiUtil.fetchSingleHappening(id);
  },

  createHappening: function(happening){
    HappeningApiUtil.createHappening(happening);
  },
};

module.exports = ClientActions;
