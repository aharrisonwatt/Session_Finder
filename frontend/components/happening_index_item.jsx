var React = require('react');
var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var HappeningIndexItem = React.createClass({
  handleClick: function(){
    hashHistory.push('happenings/' + this.props.happening.id);
  },

  render: function() {
    var happening = this.props.happening;

    var images = happening.image.map(function(image){
      return <img key={image.id} className='index-image' src={image.image_url}/>;
    });

    var tags = happening.tags.map(function(tag){
      return <div key={tag.id} className='index-item-tag'>{tag.name}</div>;
    });

    return (
      <div className='index-item'>
        <div className='index-image-container'>
          {images}
        </div>
        <div className='index-text-container'>
          <h2>{happening.title}</h2>
          <div className='index-item-tags'>
            {tags}
          </div>
          <button className='index-item-details' onClick={this.handleClick}>
            Session Details
          </button>
        </div>
      </div>
    );
  }

});

module.exports = HappeningIndexItem;
