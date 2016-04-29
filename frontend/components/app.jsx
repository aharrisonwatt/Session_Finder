var React = require('react'),
    Navbar = require('./navbar'),
    CurrentUserState = require('../mixins/current_user_state'),
    HappeningIndex = require('./happening_index'),
    Map = require('./map');


var App = React.createClass({
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
        <Navbar />
        {this.display()}
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
