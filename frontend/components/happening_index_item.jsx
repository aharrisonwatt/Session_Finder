var React = require('react');

var HappeningIndexItem = React.createClass({

  render: function() {
    var happening = this.props.happening;
    return (
      <div className='index-item'>{happening.title}
        <img className='index-image' src={happening.image}/>
        <div>
          <li>{happening.body}</li>
          <li>{happening.game}</li>
        </div>
      </div>
    );
  }

});

module.exports = HappeningIndexItem;
