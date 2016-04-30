var React = require('react');

var HappeningIndexItem = React.createClass({

  render: function() {
    var happening = this.props.happening;

    var images = happening.image.map(function(image){
      return <img key={image.id} className='index-image' src={image.image_url}/>;
    });

    var tags = happening.tags.map(function(tag){
      return <li key={tag.id} className='index-tag'>{tag.name}</li>;
    });

    return (
      <div className='index-item'>
        <h3>{happening.title}</h3>
        {images}
        <div>
          <li>{happening.body}</li>
          {tags}
        </div>
      </div>
    );
  }

});

module.exports = HappeningIndexItem;
