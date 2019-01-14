import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';
import AdminUser from './AdminUser';

interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
}

const adminUsersData: IUser[] = [
  { id: 1, name: 'Fred', isAdmin: false },
  { id: 2, name: 'Bob', isAdmin: false },
  { id: 3, name: 'Jane', isAdmin: true },
  { id: 4, name: 'John', isAdmin: true }
];

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
