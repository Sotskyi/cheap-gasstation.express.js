const request = require("request");


module.exports = function getZipcode(coordinates) {
 
  
 let MAPQUEST_TOKEN=process.env.MAPQUEST_TOKEN;
 
  // const MAPQUEST_TOKEN =process.env.MAPQUEST_TOKEN;
  // const MAPQUEST_TOKEN="MwUc8UMGt7AzPdXY3vJmAKxacWFsT1Cr";
  return new Promise(function(resolve, reject) {
    let url = `http://open.mapquestapi.com/geocoding/v1/reverse?key=${MAPQUEST_TOKEN}&location=${coordinates.latitude},${coordinates.longitude}`;

    request.get(
      {
        url: url,
        headers: {},
        gzip: true
      },
      (err, _res, body) => {
        let jsonBody = JSON.parse(body);

        let zip = jsonBody.results[0].locations[0].postalCode;

        if (err) {
          console.error("Request error", err.message);
          reject(err);
        }
        
        resolve(zip);

      }
    );
  });
};
