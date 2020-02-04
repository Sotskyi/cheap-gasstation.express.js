
import direction from "./Direction.js";

export default function startNavigation(map, coordinates,yourMarker){



     function success(pos) {
     
        let crd = pos.coords;
        let longitude=crd.longitude;
        let latitude=crd.latitude;



        // setInterval(direction,5000,map,longitude,latitude,coordinates)
        yourMarker.setLngLat([crd.longitude,crd.latitude])
        
        


      
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