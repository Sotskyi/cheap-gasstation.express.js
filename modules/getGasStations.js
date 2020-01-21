const request = require("request");
module.exports = function getGasStations(zipCode, numberOfPages) {
  let urls = Array.from(
    { length: numberOfPages },
    (x, i) =>
      "https://www.autoblog.com/" + zipCode + "-gas-prices/pg-" + (i + 1) + "/"
  );

  const parse = url => {
    return new Promise(function(resolve, reject) {
      request.get(
        {
          url: url,
          headers: {},
          gzip: true
        },
        (err, _res, body) => {
          if (err) {
            console.error("Request error", err.message);
            reject(err);
          }
          //

          let regex = /class="details">(.*?)<\/ul>/gs;
          // console.log(body.match(regex));
          let items = [];
          let arr;
          while ((arr = regex.exec(body)) !== null) {
            const ulContent = arr[0];

            const addressRegex = /<li class="name"><a href="(.*?)"><h4>(.*?)<\/h4><address>(.*?)<\/address><\/a><\/li>/;
            const distanceRegex = /<li class="dist"><data class="distance" unit="mile" value="(.*?)">(.*?)<\/data>/;
            const priceRegex = /<[^>]*currency="(.*?)" value="(.*?)">(.*?)<[^>]*><[^>]*class="time">(.*?)</;

            if (
              addressRegex.test(ulContent) &&
              distanceRegex.test(ulContent) &&
              priceRegex.test(ulContent)
            ) {
              const address = ulContent.match(addressRegex);
              const distance = ulContent.match(distanceRegex);
              const price = ulContent.match(priceRegex);

              items.push({
                addressName: address[2],
                addresStreet: address[3],
                addresUrl: address[1],
                distanceVal: distance[1],
                distanceType: distance[2].split(" ")[1],
                priceCurrency: price[1],
                price: price[3].substr(1),
                priceTime: price[4]
              });
            }
          }

          resolve(items);
        }
      );
    });
  };

  let promises = urls.map(url => parse(url));
  return Promise.all(promises).then(responses => {
    return responses;
  });

  //   },reason => {
  //     console.log(reason)
  //   })
  //   console.log(res);
};
