var geocoder;
var map;


function codeAddress() {

    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(39.03377, -94.57671);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var weatherLayer = new google.maps.weather.WeatherLayer({
    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
    });
    
    weatherLayer.setMap(map);

    var cloudLayer = new google.maps.weather.CloudLayer();
    cloudLayer.setMap(map);

    var address = document.getElementById('address').value;
    
    geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Search result was not successful for the following reason: ' + status);
    }
  });
}

google.maps.event.addDomListener(window, 'load');