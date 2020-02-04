const request = require("request");
module.exports = function getZipcode(coordinates){

    // let latitude=coordinates.latitude;
    // let longitude=coordinates.longitude;
    
    return new Promise(function(resolve, reject) {
    
        
    let url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates.longitude},${coordinates.latitude}.json?limit=1&access_token=pk.eyJ1IjoiYW5kcmV3NzEyNDEiLCJhIjoiY2s1Njd1czJyMDBkbDNucGY2amN4d3dpYyJ9.yWyF1bOBV2MLUUNlg-esvw`


    request.get(
        {
          url: url,
          headers: {},
          gzip: true
        },
        (err, _res, body) => {
            let jsonBody = JSON.parse(body);
            
           
            
            var isnum = /^\d+$/.test(jsonBody.features[0].context[0].text);
            
            let zip=isnum?jsonBody.features[0].context[0].text:jsonBody.features[0].context[1].text;
            
            
          if (err) {
            console.error("Request error", err.message);
            reject(err);
          }
          ;
          resolve(zip)
        })
        
    
    })


}