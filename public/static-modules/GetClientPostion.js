export default function getClientPosition() {
    let options = {
      timeout: 30000,
      enableHighAccuracy: true,
      maximumAge: 75000
    };
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej, options);
    });
  }
 