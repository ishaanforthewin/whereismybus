 /*Initizializes the google map*/
 // var map;
 //
 // function initMap() {
 //     map = new google.maps.Map(document.getElementById('map'), {
 //         center: {
 //             lat: 42.1539,
 //             lng: -88.1362
 //         },
 //         zoom: 15
 //     });
 // }

 /* End of initialization the google map */



 // Note: This example requires that you consent to location sharing when
 // prompted by your browser. If you see the error "The Geolocation service
 // failed.", it means you probably did not give permission for the browser to
 // locate you.


 // Note: This example requires that you consent to location sharing when
 // prompted by your browser. If you see the error "The Geolocation service
 // failed.", it means you probably did not give permission for the browser to
 // locate you.

 function initMap() {
     var map = new google.maps.Map(document.getElementById('map'), {
         center: {
             lat: 42.1539,
             lng: -88.1362
         },
         zoom: 6
     });
     var infoWindow = new google.maps.InfoWindow({
         map: map
     });

     // Try HTML5 geolocation.
     if (navigator.geolocation) {
         navigator.geolocation.watchPosition(function (position) {

             var pos = {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude
             };

             var marker = new google.maps.Marker({
                 position: pos,
                 map: map,
                 title: 'Current Location',
                 icon: 'http://yohman.bol.ucla.edu/images/bus.png'

             });
             marker.addListener('click', function () {
                 infowindow.open(map, marker);
             });



             // infoWindow.setPosition(pos);
             // infoWindow.setContent('Location found.');
            // map.setCenter(pos);


         }, function () {

             handleLocationError(true, infoWindow, map.getCenter());
         });
     } else {

         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
     }


 }


 function handleLocationError(browserHasGeolocation, infoWindow, pos) {
     infoWindow.setPosition(pos);
     infoWindow.setContent(browserHasGeolocation ?
         'Error: The Geolocation service failed.' :
         'Error: Your browser doesn\'t support geolocation.');
 }