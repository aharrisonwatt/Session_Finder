var React = require('react');
var ReactDOM = require('react-dom');
var CurrentUserState = require("../mixins/current_user_state");

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var HappeningFormTags = require('./happening_form_tags'),
    ClientActions = require('../actions/client_actions');

var markersArray = [];
var stockImages = [
  "https://scontent-sjc2-1.xx.fbcdn.net/v/l/t1.0-9/10407795_808844515801600_2345136807276568359_n.jpg?oh=6d45d668523c6ce1d1aa0ea3f69a8b6b&oe=57A469EF",
  "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/10310986_990096557676394_2673558533976698986_n.jpg?oh=b6ecd2df1f82f147d6e04196061a2401&oe=57E0FE91",
  "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12921_1197215143631200_1163631033959292995_n.jpg?oh=f81b401e351ebf18e287f24bc749783a&oe=579FF8E0"
];

var HappeningForm = React.createClass({

  getInitialState: function(){
    return {
      title: '',
      body: '',
      image: '',
      lat: '',
      lng: '',
      address: '',
    };
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.611444, lng: -122.227020},
      zoom: 9
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.registerListeners();
  },

  registerListeners: function(){
    var that = this;
    google.maps.event.addListener(this.map, 'click', function(event){
      var coords = { lat: event.latLng.lat(), lng: event.latLng.lng() };
      that._handleClick(coords);
    });
  },

  _handleClick: function(coords){
    this.state.lng = coords.lng;
    this.state.lat = coords.lat;
    var that = this;
    var myLatlng = new google.maps.LatLng(coords.lat, coords.lng);
    var geocoder = new google.maps.Geocoder();
    var marker = new google.maps.Marker({
        position: myLatlng
      });
    geocoder.geocode({'location': myLatlng}, function(results){
      that.setState({
        address: results[0].formatted_address
      });
    });
    this.clearOverlays();
    markersArray.push(marker);
    this.setMarkers();
  },

  clearOverlays: function(){
    for (var i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
    markersArray = [];
  },

  setMarkers: function(){
    for (var i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(this.map);
    }
  },

  updateAddress: function(event){
    this.setState({ address: event.target.value});
    var geocoder = new google.maps.Geocoder();
    var that = this;
    var latitude;
    var longitude;
    geocoder.geocode({address: event.target.value}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK) {
        latitude = results[0].geometry.location.lat();
        longitude = results[0].geometry.location.lng();
        this.setState({
          lat: latitude,
          lng: longitude
        });
        var myLatlng = new google.maps.LatLng(latitude, longitude);
        var marker = new google.maps.Marker({
          position: myLatlng
        });
        this.clearOverlays();
        markersArray.push(marker);
        this.setMarkers();
      }
    }.bind(this));
  },
  handleSubmit: function(event){
    if (this.state.errors){
      var perviousErrors = this.state.errors;
    }
    if (HappeningFormTags.getTags().tags.length === 0) {
      this.setState( {errors:'Please Select a Game'} );
    }else if (this.state.image === ''){
      this.setState( {errors:'Please Select a Image'} );
    }else if (this.state.lat === ''){
      this.setState( {errors:'Please Enter a Valid Address'} );
    }else if (this.state.body === ''){
      this.setState( {errors:'Please Enter a Description'} );
    }else if (this.state.title === ''){
      this.setState( {errors:'Please Enter a Title'} );
    }else{
      var tags = HappeningFormTags.getTags();
      var happening = Object.assign({}, this.state, tags);
      ClientActions.createHappening(happening);
      this.props.closeModal();
    }
  },

  updateTitle: function(event){
    this.setState({ title: event.target.value});
  },

  updateBody: function(event){
    this.setState({ body: event.target.value});
  },

  updateImage: function(event){
    this.setState({ image: event.target.value});
  },

  handleCancel: function(event){
    event.preventDefault();
    this.props.closeModal();
  },

  showErrors: function(){
    if (this.state.errors){
      return(
        <h3 className='login-errors'>{this.state.errors}</h3>
      );
    }else{
      return;
    }
  },

  addImage: function(){
    var randomImage = stockImages[Math.floor(Math.random() * stockImages.length)];
    this.setState(
      {
        image: randomImage
      }
    );
  },

  render: function() {
    return (
      <div className='happening-form'>
        <div className="happening-form-container">
          {this.showErrors()}
          <h3 className="happening-form-header">Create A Session</h3>
          <HappeningFormTags />
          <form className="happening-form-inputs" onSubmit={this.handleSubmit}>
            <label className='happening-form-label'>Title:
              <input
                type="text"
                value={this.state.title}
                onChange={this.updateTitle} />
            </label>
            <label className='happening-form-label'>Add a Description:
              <textarea
                value={this.state.body}
                onChange={this.updateBody}></textarea>
            </label>
            <label className='happening-form-label'>Address:
              <input
                type="text"
                value={this.state.address}
                onChange={this.updateAddress}/>
            </label>
            <label className='happening-form-label happening-form-random-image' onClick={this.addImage}>Use a Stock Image</label>
            <label className='happening-form-label'> Image Url:
              <input
                type="text"
                value={this.state.image}
                onChange={this.updateImage} />
            </label>
            <div className="happening-form-confirm">
              <input  className="pure-button"
                      type="submit"
                      value="Create Session"/>
              <button className="pure-button"
                      onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
        <div className='happening-form-map-container'>
          <div className="happening-form-map" ref="map"/>
        </div>
      </div>
    );
  }

});

module.exports = HappeningForm;
