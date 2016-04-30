var React = require('react'),
    Navbar = require('./navbar'),
    CurrentUserState = require('../mixins/current_user_state'),
    HappeningIndex = require('./happening_index'),
    Map = require('./map');


var App = React.createClass({
  mixins: [CurrentUserState],

  render: function() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
