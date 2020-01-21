export default async function direction(map, longitude, latitude, coordinates) {
  let url =
    "https://api.mapbox.com/directions/v5/mapbox/driving/" +
    longitude +
    "," +
    latitude +
    ";" +
    coordinates[0] +
    "," +
    coordinates[1] +
    "?&geometries=geojson&access_token=pk.eyJ1IjoiYW5kcmV3NzEyNDEiLCJhIjoiY2s1Njd1czJyMDBkbDNucGY2amN4d3dpYyJ9.yWyF1bOBV2MLUUNlg-esvw";
  let response = await fetch(url);
  let responseJson = await response.json();

  let data = responseJson.routes[0];

  let route = data.geometry.coordinates;

  let geojson = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: route
    }
  };
  // if the route already exists on the map, reset it using setData
  if (map.getSource("route")) {
    map.getSource("route").setData(geojson);
  } else {
    // otherwise, make a new request
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: geojson
          }
        }
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#0B1EEA",
        "line-width": 5,
        "line-opacity": 0.75
      }
    });
  }
}
