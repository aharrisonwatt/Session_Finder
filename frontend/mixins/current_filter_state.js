var HappeningStore = require('../stores/happening_store'),
    ClientActions = require('../actions/client_actions');

module.exports = {
  getInitialState: function(){
    return(
      {
        bounds: null,
        filters: null
      }
    );
  },

  setBounds: function(bounds){
    var filters = this.state.filters;
    this.setState(
      {
        bounds: bounds,
        filters: filters
      }
    );
    this.updateStore;
  },

  setFilters: function(filters){
    var bounds = this.state.bounds;
    this.setState(
      {
        bounds: bounds,
        filters: filters
      }
    );
    this.updateStore;
  },

  updateStore: function(){
    var bounds = this.state.bounds;
    var filters = this.state.filters;

    ClientActions.fetchAllHappenings(bounds, filters);
  }
  

};
