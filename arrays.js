var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, newElement){
  array.unshift(newElement);
  return array;
}

function addElementToEndOfArray(array, element){
  
  var newArray = [array, ...element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}