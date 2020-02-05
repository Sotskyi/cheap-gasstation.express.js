export default function getClientPosition() {
    let options = {
      timeout: 10000,
      enableHighAccuracy: true,
      maximumAge: 75000
    };
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej, options)
    }).catch(function error(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    })
  }
 