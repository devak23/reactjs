export default {
  getRootPaths: function() {
    return {
      '/home': 'Home',
      '/reports': 'Reports',
      '/administration': 'Administration',
    }
  },
  getReportPaths: function() {
    return {
      '/reports/delivery': 'Delivery',
      '/reports/h2hdelivery': 'H2H Delivery',
      '/reports/reporttemplates' :'Report Templates',
    }
  },
  getHomePaths: function() {
    return {
      '/home/dashboard': 'Dashboard',
      '/home/diagnostics': 'Diagnostics',
    }
  },
  getAdministrationPaths: function() {
    return {
      '/administration/accountsupload': 'Account Upload',
      '/administration/awacs': 'AWACS',
      '/administration/cmsfileupload': 'CMS File Upload',
      '/administration/entitlements': 'Entitlements',
      '/administration/logsmodification': 'Logs Modification'
    }
  },
  getAllPaths: function() {
    return {...this.getRootPaths(),...this.getHomePaths(), ...this.getReportPaths(), ...this.getAdministrationPaths()}
  },
  getFilteredPaths: function(path) {
    if (path.indexOf('/reports') > -1) {
      return {...this.getRootPaths(), ...this.getReportPaths()};
    } else if (path.indexOf('/administration') > -1) {
      return {...this.getRootPaths(), ...this.getAdministrationPaths()}
    } else if (path.indexOf('/home') > -1 || path.indexOf('/') > -1) {
      return {...this.getRootPaths(), ...this.getHomePaths()};
    }
  }
}
