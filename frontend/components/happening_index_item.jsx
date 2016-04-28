var React = require('react');

var HappeningIndexItem = React.createClass({

  render: function() {
    var happening = this.props.happening;
    return (
      <div>
        title: {happening.title}
        body: {happening.body}
        game: {happening.game}
        image: {happening.image}
      </div>
    );
  }

});

module.exports = HappeningIndexItem;
