var React = require('react');
var ReactDOM = require('react-dom');
var HappeningStore = require('../stores/happening_store'),
    ClientActions = require('../actions/client_actions');

module.exports = React.createClass({

  getInitialState: function(){
    return { happenings: [] };
  },

  componentDidMount: function(){
      this.happeningListener = HappeningStore.addListener(this._onChange);
      var map = ReactDOM.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 12
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.registerListeners();
    },

    registerListeners: function(){
      this.map.addListener('idle', function() {
        var bounds = this.getBounds();
        var boundsNorthEast = {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        };
        var boundsSouthWest = {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        };

        console.log("Map is fetching Happenings");
        ClientActions.fetchAllHappenings({  
          southWest: boundsSouthWest,
          northEast: boundsNorthEast
        });
      });
    },

    componentWillUnmount: function () {
      this.happeningListener.remove();
    },

    _onChange: function(){
      this.setState( {happenings: HappeningStore.all()});
    },

    addMarkers: function () {
      var happenings = this.state.happenings;
      var that = this;

      Object.keys(happenings).map(function(happeningId){
        var happening = happenings[happeningId];
        var myLatlng = new google.maps.LatLng(happening.lat,happening.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: happening.title
            });
        return (
          marker.setMap(that.map)
        );
      });
    },

  render: function() {
    this.addMarkers();
    return (
      <div className="map" ref="map"/>
    );
  }

});