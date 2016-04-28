var React = require('react');

var HappeningIndexItem = React.createClass({

  render: function() {
    var happening = this.props.happening;
    return (
      <div>{happening.title}
        <li>{happening.body}</li>
        <li>{happening.game}</li>
        <img src={happening.image}/>
      </div>
    );
  }

});

module.exports = HappeningIndexItem;
