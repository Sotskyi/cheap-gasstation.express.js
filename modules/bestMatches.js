module.exports = function bestMatches(allgasstations, miles) {
  function flat(input, depth = 1, stack = []) {
    for (let item of input) {
      if (item instanceof Array && depth > 0) {
        flat(item, depth - 1, stack);
      } else {
        stack.push(item);
      }
    }

    return stack;
  }
  let flatInOneArray = flat(allgasstations);

  let getSortingGasstations = flatInOneArray.filter(
    item => item.distanceVal < miles
  );
  getSortingGasstations=(getSortingGasstations.length<5)?flatInOneArray.filter(
    item => item.distanceVal < 5
  ): getSortingGasstations;   //<----- check ststions in 3 miles if not in 5 miles
  
  
  
  getSortingGasstations.sort(function(a, b) {
    return a.price - b.price || a.distanceVal - b.distanceVal;
  });
  let nineOfBest= getSortingGasstations.filter((elem,index)=>{ if(index<9){
    return elem
  }});
  
  return nineOfBest;
};
