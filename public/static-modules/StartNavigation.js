export default function startNavigation(map, longitude, latitude, coordinates){


 let element = document.createElement("div");
  element.className = "start-driving";
  

 let marker= new mapboxgl.Marker(element, { anchor: "center" });
    marker.setLngLat([longitude, latitude])
    marker.addTo(map);


    function success(pos,element) {
        
        var crd = pos.coords;
        marker.setLngLat([crd.latitude,crd.longitude])
      
        if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
          console.log('Congratulations, you reached the target');
          navigator.geolocation.clearWatch(id);
        }
      }
      
      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      }
      
      let target = {
        latitude : coordinates[0],
        longitude: coordinates[1]
      };
      
     let  options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      };
      
     let  id = navigator.geolocation.watchPosition(success, error, options);







}