var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, newElement){
  array.unshift(newElement);
  return array;
}

function destructivelyAddElementToEndOfArray(array, newElement){
  newArray = [newElement...array];
  return newArray;
}
