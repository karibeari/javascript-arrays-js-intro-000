var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(newArray, bar){
  newArray.unshift(bar);
  return newArray;
}

function destructivelyAddElementToEndOfArray(chocolateBars, bar){
  moreChocolateBars = [bar...chocolateBars];
  return moreChocolateBars;
}
