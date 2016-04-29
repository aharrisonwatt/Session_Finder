var React = require('react'),
    HappeningStore = require('../stores/happening_store'),
    ClientActions = require('../actions/client_actions'),
    CurrentUserState = require('../mixins/current_user_state'),
    HappeningIndex = require('./happening_index'),
    UserStore = require('../stores/user_store'),
    Map = require('./map');


var Search = React.createClass({
  mixins: [CurrentUserState],

  display: function() {
    if (this.state.currentUser){
      return (
        <div className="body">
          <HappeningIndex />
          <Map />
        </div>
      );
    }
  },

  render: function() {
    return (
      <div>
        {this.display()}
      </div>
    );
  }

});

module.exports = Search;
