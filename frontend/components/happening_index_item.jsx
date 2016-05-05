var React = require('react');
var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var HappeningShowModal = require('../modal_helpers/happening_show_modal');

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
          <h2 className='index-text-title'>{happening.title}</h2>
          <div className='index-item-tags'>
            <h3 className='index-item-tags-header'>Games:</h3>
            <div className='index-item-tags-container'>
              {tags}
            </div>
          </div>
          <HappeningShowModal happening={happening}/>
        </div>
      </div>
    );
  }

});

module.exports = HappeningIndexItem;
