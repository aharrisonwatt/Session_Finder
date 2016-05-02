var HappeningStore = require('../stores/happening_store'),
    ClientActions = require('../actions/client_actions');


var filters = [];
var bounds = {};

module.exports = {
  setBounds: function(newBounds){
    bounds = newBounds;
    this.updateStore();
  },

  setFilters: function(tagId){
    var index = filters.indexOf(tagId);
    if(index === -1){
      filters.push(tagId);
    }else {
      filters.splice(index, 1);
    }
    this.updateStore();
  },

  updateStore: function(){
    ClientActions.fetchAllHappenings(bounds, filters);
  }
};
