var React = require('react');


var App = React.createClass({

  render: function() {
    return (
      <div>
        <header><h1>Session Finder</h1></header>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
