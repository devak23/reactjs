import React from 'react';
import Entitlements from './administration/Entitlements';
import LogsModification from './administration/LogsModification';
import Repository from './administration/Repository';
import AccountsUpload from './administration/AccountsUpload';
import CMSFileUpload from './administration/CMSFileUpload';
import AWACS from './administration/AWACS';

const Administration = () => (
  <div>
    <div><strong>Administration</strong></div>
    <Entitlements />
    <LogsModification />
    <Repository />
    <AccountsUpload />
    <CMSFileUpload />
    <AWACS />
  </div>
);

export default Administration;
