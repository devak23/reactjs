import './App.css';
import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const updateUser = (user) => {
    setUsers((users) => {
      const userFoundIndex = users
        .map((u) => u.name.toLowerCase())
        .indexOf(user.name.toLowerCase());
      return userFoundIndex >= 0 ? users : [...users, user];
    });
  };

  const deleteUser = (user) => {
    setUsers((prevUsers) => users.filter((u) => u.id !== user.id));
  };

  return (
    <div className="appContainer">
      <UserForm handleUserAdded={updateUser} />
      <UserList users={users} handleDeleteUser={deleteUser} />
    </div>
  );
};

export default App;
