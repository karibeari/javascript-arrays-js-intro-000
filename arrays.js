var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, newElement){
  array.unshift(newElement);
  return array;
}

function destructivelyAddElementToEndOfArray(chocolateBars, bar){
  moreChocolateBars = [bar...chocolateBars];
  return moreChocolateBars;
}
