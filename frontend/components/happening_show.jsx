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
    var coords = { lat: happening.lat, lng: happening.lng };
    this.setAddress(coords);
  },

  setAddress: function(coords){
    var that = this;
    if (coords){
      var myLatlng = new google.maps.LatLng(coords.lat, coords.lng);
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'location': myLatlng}, function(results){
        that.setState({
          address: results[0].formatted_address
        });
      });
    }
  },

  render: function() {
    if (this.state.happening){
      var happening = this.state.happening;

      var images = happening.image.map(function(image){
        return <img key={image.id} className='happening-show-image' src={image.image_url}/>;
      });
      var tags = happening.tags.map(function(tag){
        return <div key={tag.id} className='happening-value-tag'>{tag.name}</div>;
      });
      var title = happening.title;
      var body = happening.body;
      var dateObj = new Date(happening.date);
      var date = dateObj.toDateString();
    }
    return (
      <div className='happening-show-container'>
        <div className='happening-show-details-container'>
          <div className='happening-show-title-container'>
            <h2 className='happening-show-title'>
              {title}
            </h2>
          </div>
            <div className='happening-show-description-container'>
              <div className='happening-show-description'>{body}</div>
            </div>
          <div className='happening-value'>
            <ul className='happening-value-tags'>
              <h3 className='happening-show-decription-header'>Games</h3>
              {tags}
            </ul>
            <div className='happening-value-address-container'>
              <h3 className='happening-show-decription-header'>Address</h3>
              <div className='happening-value-address'>{this.state.address}</div>
            </div>
            <div className='happening-value-date-container'>
              <div className='happening-value-date'>Created On: {date} </div>
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
