
import direction from "./Direction.js";

export default function startNavigation(longitude,latitude,map, coordinates,yourMarker){
let livelongitude;
let livelatitude;

if(livelatitude&&livelongitude){direction(map, livelatitude, livelongitude, coordinates)}
direction(map, longitude, latitude, coordinates)



  function success(pos) {


        let crd = pos.coords;
      livelongitude=crd.longitude;
       livelatitude=crd.latitude;



        
      function throttle(func, ms,args) {

        let isThrottled = false,
          savedArgs,
          savedThis;
      
        function wrapper() {
      
          if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
          }
      
          func.apply(this, args); // (1)
      
          isThrottled = true;
      
          setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
              wrapper.apply(savedThis, savedArgs);
              savedArgs = savedThis = null;
            }
          }, ms);
        }
      
        return wrapper;
      }
      throttle( direction(map, livelongitude, livelatitude, coordinates),5000)


        map.setCenter([livelongitude,livelatitude]);
        map.setZoom(13);


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
      console.log(livelatitude,livelongitude);
     let  id = navigator.geolocation.watchPosition(success, error, options);

     





}