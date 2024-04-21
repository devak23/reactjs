import './App.css';
import {useEffect, useState} from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { Users } from './data/users';

const App = () => {
  const [users, setUsers] = useState(Users);

  const updateUser = (user) => {
    console.log("users: ", users);
    setUsers((users) => {
      let userIndex = users.findIndex((u) => u.name !== user.name);
      return userIndex > 0 ? users : [...users, user];
      },
    );
  };

  useEffect(() => {
    console.log("users: ", users);
  }, [users]);

  return (
    <div className="appContainer">
      <UserForm handleUserAdded={updateUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
