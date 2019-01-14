import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { IUser, adminUsersData } from './IUser';

const AdminUser: React.SFC<RouteComponentProps<{ id: string }>> = props => {
  let user: IUser;
  if (props.match.params.id) {
    const id: number = parseInt(props.match.params.id, 10);
    user = adminUsersData.filter(user => user.id === id)[0];
  } else {
    return null;
  }

  return (
    <div>
      <div>
        <b>Id:</b>
        <span>{user.id.toString()}</span>
      </div>
      <div>
        <b>
          Is Admin: <span>{user.isAdmin ? 'Yes' : 'No'}</span>
        </b>
      </div>
    </div>
  );
};

export default AdminUser;
