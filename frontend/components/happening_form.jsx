var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var markersArray = [];

var HappeningForm = React.createClass({
  getInitialState: function(){
    return {
      title: '',
      body: '',
      game: '',
      image: '',
      lat: '',
      lng: '',
      address: ''
    };
  },

  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 12
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
  handleSubmit: function(){

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


  navigateToSearch: function(){
    hashHistory.push("/");
  },

  handleCancel: function(event){
    event.preventDefault();
    this.navigateToSearch();
  },

  render: function() {
    return (
      <div>
        <div className="map" ref="map"/>
        <h3>Create A Session</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.updateTitle} />
          </label>
          <label>Description:
            <input
              type="text"
              value={this.state.body}
              onChange={this.updateBody} />
          </label>
          <label>image url:
            <input
              type="text"
              value={this.state.image}
              onChange={this.updateImage} />
          </label>
          <label>Address:
            <input
              type="text"
              value={this.state.address}
              onChange={this.updateAddress}/>
          </label>
          <input type="submit" value="create session"/>
        </form>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    );
  }

});

module.exports = HappeningForm;
