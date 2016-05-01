var HappeningStore = require('../stores/happening_store'),
    ClientActions = require('../actions/client_actions');


var filters = {};
var bounds = {};

module.exports = {
  setBounds: function(newBounds){
    bounds = newBounds;
    this.updateStore();
  },

  setFilters: function(newFilters){
    filters = newFilters;
    this.updateStore();
  },

  updateStore: function(){
    ClientActions.fetchAllHappenings(bounds, filters);
  }
};
