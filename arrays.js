var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, newElement){
  newArray.unshift(newElement);
  return newArray;
}

function destructivelyAddElementToEndOfArray(chocolateBars, bar){
  moreChocolateBars = [bar...chocolateBars];
  return moreChocolateBars;
}
