import getClientPosition from "./static-modules/GetClientPostion.js";
import showGasStationButtons from "./static-modules/ShowGasStationButtons.js";
import addMarkers from "./static-modules/AddMarkers.js";
import direction from "./static-modules/Direction.js";
import startNavigation from "./static-modules/StartNavigation.js";
import showGoogleButton from"./static-modules/ShowGoogleButton.js";
async function main() {
  let position = await getClientPosition();
  let longitude = position.coords.longitude;
  let latitude = position.coords.latitude;

  mapboxgl.accessToken =
    "pk.eyJ1IjoiYW5kcmV3NzEyNDEiLCJhIjoiY2s1Njd1czJyMDBkbDNucGY2amN4d3dpYyJ9.yWyF1bOBV2MLUUNlg-esvw";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 13
  }); //<---- start render map

  let sendLocation = await fetch("/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ latitude: latitude, longitude: longitude })
  });
  let getSortingGasstations = await sendLocation.json();

  showGasStationButtons(getSortingGasstations);

  let yourMarker = addMarkers(getSortingGasstations, latitude, longitude, map);

  document.onclick = async function(e) {
    
    if (e.target.tagName !== "CANVAS"&&e.target.tagName !== "DIV"&&e.target.tagName!=="A" ) {
      let coordinates = [
        e.target.closest("[coordinates]").getAttribute("coordinates")
      ];
      if (coordinates) {
        let updatePosition = await getClientPosition();
        let updateLongitude = updatePosition.coords.longitude;
        let updateLatitude = updatePosition.coords.latitude;
        let distanceAndDuration= await direction(map, updateLongitude, updateLatitude, coordinates);
        showGoogleButton(distanceAndDuration,updateLongitude, updateLatitude, coordinates);


        startNavigation(updateLongitude,  updateLatitude, map, coordinates, yourMarker);
        
      }
    }
  }
}

main();
