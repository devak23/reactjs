export default {
  getScheduleStatuses: function() {
    return Object.assign({}, ['ALL', 'Running', 'Paused'])
  },
  getScheduleTypes: function() {
    return Object.assign({}, ['ALL', 'Real time', 'Daily', 'Weekly', 'Monthly','Quarterly','Yearly','Custom', 'Intraday']);
  }
}