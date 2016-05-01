var HappeningStore = require('../stores/happening_store'),
    ClientActions = require('../actions/client_actions');


var filters = {};
var bounds = {};

module.exports = {
  setBounds: function(newBounds){
    bounds = newBounds;
    this.updateStore();
  },

  setFilters: function(newFilter){
    if(filters[newFilter] === true){
      filters[newFilter] = false;
    }else{
      filters[newFilter] = true;
    }
    this.updateStore();
  },

  updateStore: function(){
    ClientActions.fetchAllHappenings(bounds, filters);
  }
};
