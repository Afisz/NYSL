'use strict';


function initMap() {
  if (navigator.geolocation) { //Checks if browser supports geolocation
    navigator.geolocation.getCurrentPosition(function (position) { //This gets the
      var latitude = position.coords.latitude; //users current
      var longitude = position.coords.longitude; //location
      var coords = new google.maps.LatLng(latitude, longitude);
      //Creates variable for map coordinates
      var directionsService = new google.maps.DirectionsService();
      var directionsRenderer = new google.maps.DirectionsRenderer();
      var mapOptions = //Sets map options
        {
          zoom: 15, //Sets zoom level (0-21)
          center: coords //zoom in on users location
        };

      if (document.getElementById("map")) {
        var map = new google.maps.Map( /*creates Map variable*/ document.getElementById("map"), mapOptions /*Creates a new map using the passed optional parameters in the mapOptions parameter.*/ );
        directionsRenderer.setMap(map);
      };

      if (app.elementarySchool[0]) {
        var request = {
          origin: coords,
          destination: app.elementarySchool[0].direction,
          travelMode: google.maps.TravelMode['DRIVING']
        };
      };

      directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(response);
        }
      });
    }, function (error) {
      handleNoGeolocation();
    }, {
      enableHighAccuracy: true,
      maximumAge: 60000,
      timeout: 10000
    });
  }
};
