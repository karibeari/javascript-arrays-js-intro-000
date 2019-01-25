var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(array, newElement){
  array.unshift(newElement);
  return array;
}

function addElementToBeginningOfArray(array, newElement){
  newArray = [newElement ...array];
  return newArray;
}
