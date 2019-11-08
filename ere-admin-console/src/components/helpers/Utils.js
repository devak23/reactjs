let chop = (string, index) => string.substr(index);

let Status = {
  GREEN: 'green',
  RED: 'red',
  AMBER: 'amber'
};

let Delay = {
  IN_DURATION: 300,
  OUT_DURATION: 225
}

export { chop, Status, Delay };
