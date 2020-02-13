 export default function findWordInList(name) {
    let arr = [
      "Aloha Petroleum",
      "Alon",
      "American Gas",
      "Amoco",
      "ARCO",
      "Billups",
      "BP",
      "Bucky's",
      "Casey's General Stores",
      "CENEX",
      "Chevron",
      "Circle",
      "Citgo",
      "Conoco",
      "Costco brand gasoline",
      "Crown",
      "Cumberland Farms",
      "Delta Sonic - Buffalo, New York",
      "Exxon",
      "Etna",
      "Fastrip",
      "food4less",
      "Frontier",
      "Flying J",
      "Gant",
      "GasAmerica",
      "Gas City, Ltd.",
      "GasTrac",
      "Getty",
      "Gas Land Petroleum",
      "Go-Mart",
      "Gulf",
      "Hele",
      "High's Dairy Stores",
      "Holiday",
      "Irving Oil",
      "King Soopers",
      "Kroger brand gasoline",
      "Kum & Go",
      "Kwik Trip",
      "wik Fill",
      "Lassus Handy Dandy",
      "Liberty",
      "Love's",
      "Lukoil",
      "Marathon Oil",
      "mart",
      "Maverik",
      "McCoy Oil",
      "Meijer",
      "Mirabito",
      "Mobil",
      "Murphy USA",
      "OXXO Gas",
      "Pemex",
      "Petro Canada",
      "Phillips 66",
      "Pilot",
      "QuickChek",
      "QuikTrip",
      "RaceTrac/Raceway",
      "Royal Farms",
      "Rutter's Farm Stores",
      "7-Eleven brand gasoline",
      "76",
      "Sam's Club",
      "Safeway",
      "Servco",
      "Sheetz",
      "Shell",
      "Sinclair",
      "Speedway",
      "Spinx",
      "Stewart's Shops",
      "Sunoco",
      "Tesoro",
      "Texaco",
      "Thorntons",
      "Total",
      "Travelcenters of America",
      "Travelers Oil",
      "Valero",
      "Wawa",
      "Weigel’s"
    ];
    let flatList = arr
      .map((elem, index) => {
        let listOfGasstations = elem
          .trim()
          .toLowerCase()
          .split(" ");
        return listOfGasstations;
      })
      .flat();
  
    let arrFromName = name
      .trim()
      .toLowerCase()
      .split(" ");
      
    for (let i = -1; i < arrFromName.length; i++) {
      let findElement = flatList.find(element => element === arrFromName[i]);
      if (findElement) return findElement;
      
      
    }
    
  }
  
  
  