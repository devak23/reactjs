export default {
  isEmpty: function(obj) {
    if (obj === null) {
      return true
    }
    if (obj.length === 0) {
      return true;
    }
    if (typeof(obj) !== 'object') {
      return true;
    }
    if (Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  }
}

const Status = {
  GREEN: 'green',
  RED: 'red',
  AMBER: 'amber'
};

const Duration = {
  IN_DURATION: 300,
  OUT_DURATION: 450
};

export {Status, Duration}