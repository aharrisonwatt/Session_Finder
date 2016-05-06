var React = require('react');
var ReactDOM = require('react-dom');
var HappeningStore = require('../stores/happening_store'),
    CurrentFilterState = require('../helpers/current_filter_state');

var ReactRouter = require('react-router'),
    hashHistory = ReactRouter.hashHistory;

var markersArray = [];

module.exports = React.createClass({

  getInitialState: function(){
    return { happenings: [] };
  },

  componentDidMount: function(){
    this.happeningListener = HappeningStore.addListener(this._onChange);
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.701988, lng: -122.118530},
      zoom: 10
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

      //instead of clientactions new component
      CurrentFilterState.setBounds({
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

  addMarkers: function () {
    var happenings = this.state.happenings;
    var that = this;

    var markers = Object.keys(happenings).map(function(happeningId){
      var happening = happenings[happeningId];
      var myLatlng = new google.maps.LatLng(happening.lat, happening.lng);
      var marker = new google.maps.Marker({
          position: myLatlng,
          title: happening.title,
          id: happening.id
          });
      google.maps.event.addListener(marker, 'click', function () {
        hashHistory.push('happenings/' + marker.id);
      });
      return (
        markersArray.push(marker)
      );
    });
  },

  render: function() {
    this.clearOverlays();
    this.addMarkers();
    this.setMarkers();
    return (
      <div className='map-container'>
        <div className="map" ref="map"/>
      </div>
    );
  }

});
