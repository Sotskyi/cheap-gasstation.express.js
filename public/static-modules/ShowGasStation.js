export default function showGasStation(arr) {
  let innerhtml = "";
  let container = document.querySelector(".flex-container");
  arr["bestIn3Miles"].forEach((element, index) => {
    let name = element.addressName.split(" ");
    let str = name[0] + " ";
    if (name[1]) {
      str += name[1];
    }
   
    innerhtml += `<button class="flex-item" coordinates=${
      element.coordinates
    } ><span class="describe-content">${str}<br>${
      element.price
    }$</span> <div class="numberCircle">${index + 1}</div></button>`;
  });
  container.innerHTML = innerhtml;
}
