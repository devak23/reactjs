let Status = {
  GREEN: 'green',
  RED: 'red',
  AMBER: 'amber'
};

let Duration = {
  IN_DURATION: 300,
  OUT_DURATION: 450
}

let isEmpty = function(obj) {
  if (obj === null) {
    return true
  }
  if (obj.length === 0) {
    return true;
  }
  if (typeof(object) !== 'object') {
    return true;
  }
  if (Object.keys(obj).length == 0) {
    return true;
  }
  return false;
}

export { Status, Duration, isEmpty };
