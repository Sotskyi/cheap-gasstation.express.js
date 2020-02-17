export default async function direction(
  map,
  longitude,
  latitude,
  coordinates,
  mapboxKey
) {
  let url =
    "https://api.mapbox.com/directions/v5/mapbox/driving/" +
    longitude +
    "," +
    latitude +
    ";" +
    coordinates[0] +
    "," +
    coordinates[1] +
    "?&geometries=geojson&access_token=" +
    mapboxKey;
  let response = await fetch(url);
  let responseJson = await response.json();

  let distance = ((responseJson.routes[0].distance / 1000) * 0.62137).toFixed(
    1
  );
  let duration = Math.round(responseJson.routes[0].duration / 60);
  let obj = { duration: duration, distance: distance };
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
            coordinates: route
          }
        }
      },
      layout: {
        "line-join": "round",
        "line-cap": "round"
      },
      paint: {
        "line-color": "#1a3263",
        "line-width": 5,
        "line-opacity": 0.75
      }
    });
  }
  return obj;
}
