import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Entitlements from './administration/Entitlements';
import LogsModification from './administration/LogsModification';
import Repository from './administration/Repository';
import AccountsUpload from './administration/AccountsUpload';
import CMSFileUpload from './administration/CMSFileUpload';
import AWACS from './administration/AWACS';

const Administration = () => (
  <Fragment>
    <Switch>
      <Route exact path='/administration/entitlements' component={Entitlements} />
      <Route exact path='/administration/logsmodification' component={LogsModification} />
      <Route exact path='/administration/repository' component={Repository} />
      <Route exact path='/administration/accountsupload' component={AccountsUpload} />
      <Route exact path='/administration/cmsfileupload' component={CMSFileUpload} />
      <Route exact path='/administration/awacs' component={AWACS} />
      <div><strong>Administration</strong></div>
    </Switch>
  </Fragment>
);

export default Administration;
