export default {
  getCountries: function() {
    return Object.assign({}, ["AUSTRALIA","CHINA","GERMANY","HONG KONG" ,"INDIA","INDONESIA","IRELAND","JAPAN","KOREA","LUXEMBOURG","MALAYSIA","MALAYSIA (LABUAN)","MEXICO","NEW ZEALAND" ,"PHILIPPINES","SINGAPORE","TAIWAN","THAILAND","UNITED KINGDOM" ,"US","VIETNAM"]);
  },
  getStatuses: function() {
    return Object.assign({}, ['','Pending','Approved', 'Rejected', 'Partial']);
  }
}