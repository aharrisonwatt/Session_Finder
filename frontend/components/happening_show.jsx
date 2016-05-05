var React = require('react'),
    HappeningStore = require('../stores/happening_store'),
    ClientActions = require('../actions/client_actions');

var HappeningShow = React.createClass({
  getInitialState: function () {
    return { happening: undefined };
  },

  componentDidMount: function() {
    this.happeningListener = HappeningStore.addListener(this._onChange);
    ClientActions.fetchSingleHappening(this.props.happening.id);
  },

  componentWillUnmount: function() {
    this.happeningListener.remove();
  },

  _onChange: function() {
    var happeningId = this.props.happening.id;
    var happening = HappeningStore.find(happeningId) || {} ;
    this.setState( { happening: happening});
  },

  render: function() {
    if (this.state.happening){
      var happening = this.state.happening;
      var images = happening.image.map(function(image){
        return <img key={image.id} className='happening-show-image' src={image.image_url}/>;
      });
      var tags = happening.tags.map(function(tag){
        return <div key={tag.id} className='happening-value'>{tag.name}</div>;
      });
      var title = happening.title;
      var body = happening.body;
      var date = happening.date;
    }
    return (
      <div className='happening-show-container'>
        <div className='happening-show-details-container'>
          <div className='happening-show-title-container'>
            <h2 className='happening-show-title'>
              {title}
            </h2>
          </div>
            <div className='happening-show-description'>
                {body}
            </div>
          <div className='happening-value'>
            {date}
            <ul className='happening-show-tags'>
              {tags}
            </ul>
          </div>
        </div>
        <div className='happening-show-image-container'>
          {images}
        </div>
      </div>
    );
  }

});

module.exports = HappeningShow;
