export default function showGoogleButton(data,updateLongitude, updateLatitude, coordinates){


let wrapper= document.querySelector(".navigation-wrapper");
let googleButton=document.querySelector(".goolge-map-button");
let position=coordinates[0].split(",");
let targetLongitude=position[0];
let targetLatitude=position[1];


googleButton.href=`http://maps.google.com/maps?saddr=${updateLatitude},${updateLongitude}&daddr=${targetLatitude},${targetLongitude}`;
let distance=document.querySelector(".navigation-distance");
let duration=document.querySelector(".navigation-duration");
wrapper.style.opacity="1"
distance.innerHTML=`distance(${data.distance} mil)`;
duration.innerHTML=`duration(${data.duration} min)`;




}