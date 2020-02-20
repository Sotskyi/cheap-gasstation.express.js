export default function getClientPosition() {
    let options = {
      
      enableHighAccuracy: true,
      maximumAge: 75000
    };
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej, options)
    }).catch(function error(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    })
  }
 