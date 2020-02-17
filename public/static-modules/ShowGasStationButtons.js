import GenerateLogoName from "./GenerateLogoName.js"

export default function showGasStationButtons(arr) {
  let innerhtml = "";

  let container = document.querySelector(".flex-container");
  arr["bestIn3Miles"].forEach((element, index) => {
    
   
    let name = element.addressName.trim();
    let find= name.indexOf("#");
    let resultName=(find!=-1)?name.substring(0,find).trim():name;
   
   
      
    let logoName=GenerateLogoName(resultName);
    
    let linc=logoName?`./stations/${logoName}.jpg`:`./stations/alternative.jpg`;
    
   
    innerhtml += `<a href="#" class="flex-item-button" coordinates=${
      element.coordinates
    } ><div class="number-wrapper">
     <span class="gasstation-number">${index + 1}</div></span>
      <div class="wrapper-describe-content">
      <div class="wrapper-logo">
    <img   class="gasstation-logo"src="${linc}"  onerror="this.src='./stations/alternative.jpg'" " > 
    </div>
    <div class="wrapper-name-price">
      <span class="gasstation-name">${resultName}</span> 
    <span class="gasstation-price">$${element.price}</span>
    </div>
   </div>
    
    
    </a>` ;
  });
  container.innerHTML = innerhtml;
}
