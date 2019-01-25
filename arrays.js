var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(array, newElement){
  array.unshift(newElement);
  return array;
}

function addElementToBeginningOfArray(array1, newElement1){
  newArray1 = [newElement ...array1];
  return newArray1;
}
