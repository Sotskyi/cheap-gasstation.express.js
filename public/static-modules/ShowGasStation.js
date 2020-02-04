export default function showGasStation(arr) {
  let innerhtml = "";

  let container = document.querySelector(".flex-container");
  arr["bestIn3Miles"].forEach((element, index) => {
    let str = "";
    let arr = [];
    let name = element.addressName.split(" ");
    if (name[0].length > 6) {
      let tmp = name[0].split("");

      for (let i = 0; i < tmp.length; i++) {
        if (i === 4) {
          arr.push(tmp[i] + "-" + " ");   //<--- add "-"
          continue;
        }
        arr.push(tmp[i]);
        let result = arr.join("");
        str = result;
      }
    } else str = name[0] + " ";
    if (name[1]) {
      str += name[1];
    }

    innerhtml += `<a href="#" class="flex-item-button" coordinates=${
      element.coordinates
    } >
    <h3 class="price-button">${element.price}$</h3>
    
    <span class="describe-content">${str}</span> <div class="numberCircle">${index +
      1}</div></a>`;
  });
  container.innerHTML = innerhtml;
}
