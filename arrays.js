var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, bar){
  chocolateBars.unshift(bar);
  return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, bar){
  chocolateBars.unshift(bar);
  return chocolateBars;
}
