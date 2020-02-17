const request = require("request");

module.exports = function addCoordinates(arr) {
  let MAPBOX_TOKEN=process.env.MAPBOX_TOKEN;
  
  let urls = Array.from(
   arr,
    (x, i) =>
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${x.addresStreet}.json?limit=1&access_token=${MAPBOX_TOKEN}`
  );


 
  

  const addLatLon = url => {
    return new Promise(function(resolve, reject) {
      request.get(
        {
          url: url,
          headers: {},
          gzip: true
        },
        (err, _res, body) => {
          let jsonBody = JSON.parse(body);
          let center=jsonBody.features[0].center;
          
         
         
          
          
          // for (let i = 0; i < arrayOfObjects.length; i++) {
          //   arr[i].coordinates = arrayOfObjects[i].locations[0].latLng;
          // }

          if (err) {
            console.error("Request error", err.message);
            reject(err);
          }
          //

          return resolve(center);
        }
      );
    });
  };

  let promises = urls.map(url => addLatLon(url) );
  return Promise.all(promises)
  
  
  .then(responses => {
   responses.forEach((elem,index)=>arr[index].coordinates=elem) 
    
    return arr;
    
   
  });
};