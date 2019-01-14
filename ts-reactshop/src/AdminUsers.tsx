import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import AdminUser from './AdminUser';
import { IUser, adminUsersData } from './IUser';

const AdminUsers: React.SFC<IUser> = () => {
  const users = adminUsersData.map(user => {
    return (
      <li>
        <NavLink to={`/admin/users/${user.id}`} activeClassName='admin-link-active'>
          {user.name}
        </NavLink>
      </li>
    );
  });

  return (
    <div>
      <ul className='admin-sections'>{users}</ul>
      <Route exact path='/admin/users/:id' component={AdminUser} />
    </div>
  );
};

export default AdminUsers;
