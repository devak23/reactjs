export default {
  getDeliveryTypes: function() {
    return Object.assign({}, ['Email']);
  },
  getDeliveryStatus: function() {
    return Object.assign({}, [ 'ALL', 'Pending', 'Approved', 'Rejected']);
  }
}
