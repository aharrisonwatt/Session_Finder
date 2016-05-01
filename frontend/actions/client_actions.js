var HappeningApiUtil = require('../util/happening_api_util'),
    TagApiUtil = require('../util/tag_api_util');

var ClientActions = {
  fetchAllHappenings: function(bounds, filters){
    HappeningApiUtil.fetchAllHappenings(bounds, filters);
  },

  fetchSingleHappening: function(id){
    HappeningApiUtil.fetchSingleHappening(id);
  },

  createHappening: function(happening){
    HappeningApiUtil.createHappening(happening);
  },

  fetchAllTags: function(){
    TagApiUtil.fetchAllTags();
  }
};

module.exports = ClientActions;
