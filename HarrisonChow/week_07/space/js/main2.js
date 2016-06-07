
var basePersonURL = "http://api.open-notify.org/astros.json";
var $basePersonContent = $(".person .content");
var locations = [];

var displayPersonInformation = function (data) {
  var results = data.people;
  var count= results.length;
  for (var i = 0; i < results.length; i++) {
    var result = results[i].name;
    var $p = $("<p>");
    $p.text(result);
    $basePersonContent.prepend($p);
  }
  var $div = $("<div>");
  $div.text( "There are "+ count + " persons in total.");
  $div.prependTo($basePersonContent);
};
var getPersonInformation = function() {
  $.ajax({
    url: basePersonURL,
    dataType: "JSONP",
    type: "GET"
  }).done(displayPersonInformation);
};

var baseLocationURL = "http://api.open-notify.org/iss-now.json";
var $baseLocationContent = $(".location .content");


var displayLocationInformation = function (data) {
  var results = data.iss_position;
  var lat= results.latitude;
  var lon= results.longitude;
  var $div = $("<div>");
  $div.text( "Latitude: "+ lat + ", Longitude: "+ lon);
  $div.prependTo($baseLocationContent);
};
var getLocationInformation = function() {
  $.ajax({
    url: baseLocationURL,
    dataType: "JSONP",
    type: "GET"
  }).done(displayLocationInformation);
};

$(document).ready(function() {
  // locationTimer = window.setInterval(getLocationInformation,500);
  //
});

getPersonInformation();
getLocationInformation();


// This example adds an animated symbol to a polyline.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 20.291, lng: 153.027},
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });


  window.setInterval(getNewLocationAndDraw(map), 500);

}

function getNewLocationAndDraw(map) {
  return function() {
    $.ajax({
      url: baseLocationURL,
      dataType: "JSONP",
      type: "GET"
    }).done(function(data) {
      var results = data.iss_position;
      var lat= results.latitude;
      var lon= results.longitude;

      var lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 4,
        strokeColor: '#393'
      };
      // Create the polyline and add the symbol to it via the 'icons' property.
      var line = new google.maps.Polyline({
        path: [{lat: 77.291, lng: 163.027}, {lat: 18.291, lng: 153.027}, {lat: 118.291, lng: 153.027}],
        icons: [{
          icon: lineSymbol,
          offset: '100%'
        }],
        map: map
      });

      animateCircle(line);
    });
  }
}

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
function animateCircle(line) {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = line.get('icons');
      icons[0].offset = (count / 2) + '%';
      line.set('icons', icons);
  }, 20);
}


$(document).ready(function() {
  // var drawpath = window.setInterval(getLocationInformation, 500);
});
