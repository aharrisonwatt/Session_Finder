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

  setAddress: function(coords){
    var that = this;
    var myLatlng = new google.maps.LatLng(coords.lat, coords.lng);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({'location': myLatlng}, function(results){
      that.setState({
        address: results[0].formatted_address
      });
    });
  },

  render: function() {
    if (this.state.happening){
      var happening = this.state.happening;
      var coords = { lat: happening.lat, lng: happening.lng };
      this.setAddress(coords);
      var images = happening.image.map(function(image){
        return <img key={image.id} className='happening-show-image' src={image.image_url}/>;
      });
      var tags = happening.tags.map(function(tag){
        return <div key={tag.id} className='happening-value'>{tag.name}</div>;
      });
      var title = happening.title;
      var body = happening.body;
      var dateObj = new Date(happening.date);
      var date = (dateObj.getDay() + '/' +
                 dateObj.getMonth() + '/' +
                 dateObj.getFullYear());
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
            <ul className='happening-value-tags'>
              <div className='happening-value'>Games:</div>
              {tags}
            </ul>
            <div className='happening-value-address'>
              Address: {this.state.address}
            </div>
            <div className='happening-value-header'>
              Created On: {date}
            </div>
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
