

export default function startNavigation(updateLongitude,  updateLatitude, map, coordinates, yourMarker) {


  // map.setCenter([updateLongitude, updateLatitude]);
  map.setZoom(11);

  function success(pos) {
    let crd = pos.coords;
    // let livelongitude = crd.longitude;
    // let livelatitude = crd.latitude;

    // function throttle(func, ms,args) {

    //   let isThrottled = false,
    //     savedArgs,
    //     savedThis;

    //   function wrapper() {

    //     if (isThrottled) { // (2)
    //       savedArgs = arguments;
    //       savedThis = this;
    //       return;
    //     }

    //     func.apply(this, args); // (1)

    //     isThrottled = true;

    //     setTimeout(function() {
    //       isThrottled = false; // (3)
    //       if (savedArgs) {
    //         wrapper.apply(savedThis, savedArgs);
    //         savedArgs = savedThis = null;
    //       }
    //     }, ms);
    //   }

    //   return wrapper;
    // }
    // throttle( direction(map, livelongitude, livelatitude, coordinates),20000)

   
    yourMarker.setLngLat([crd.longitude, crd.latitude]);

    if (
      target.latitude === crd.latitude &&
      target.longitude === crd.longitude
    ) {
      console.log("Congratulations, you reached the target");
      navigator.geolocation.clearWatch(id);
    }
  }

  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  let target = {
    latitude: coordinates[0],
    longitude: coordinates[1]
  };

  let options = {
    enableHighAccuracy: false,
    // timeout: 0,
    maximumAge:1500000
  };

  let id = navigator.geolocation.watchPosition(success, error, options);
}
