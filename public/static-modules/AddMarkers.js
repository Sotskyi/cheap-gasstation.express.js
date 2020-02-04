export default function addMarkers(arr, latitude, longitude, map) {
 

  arr["bestIn3Miles"].forEach((elem, index) => {
    let el = document.createElement("div");
    el.className = "marker";
    el.innerHTML =
      "<span  class='gas' coordinates=" +
      elem.coordinates +
      "><b>" +
      (index + 1) +
      '</b></span><div class="belowMarker">' +
      elem.price +
      "</div>";

    new mapboxgl.Marker(el)
      .setLngLat(elem.coordinates)
      // .setPopup(
      //   new mapboxgl.Popup({ offset: 25 }) // add popups
      //     .setHTML("<h3> hello </h3><p>dwdwdw</p>")
      // )
     
      .addTo(map);
  });
  let element = document.createElement("div");
  element.className = "marker";
  element.innerHTML = "<span class='your-marker' ><b>you</b></span>";

  let yourMarker=new mapboxgl.Marker(element, { anchor: "center" })
    .setLngLat([longitude, latitude])
    .addTo(map);
    return yourMarker;
}
