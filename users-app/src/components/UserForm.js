import './UserForm.css';
import { useRef, useState } from 'react';

function createUser(userName) {
  return {
    id: Date.now().toString(),
    name: userName,
  };
}

const UserForm = ({ handleUserAdded }) => {
  const [user, setUser] = useState({ id: '', name: '' });
  const userInput = useRef();

  const addUser = (user) => {
    handleUserAdded(user);
    setUser({ id: '', name: '' });
    userInput.current.focus();
  };

  const handleOnChange = (event) => {
    setUser(createUser(event.target.value));
    event.preventDefault();
  };

  const handleOnKeyDown = (e) => {
    if (e.key === 'Enter') {
      setUser(createUser(e.target.value));
      addUser(user);
    }
  };

  return (
    <div className="userFormContainer">
      <input
        ref={userInput}
        type="text"
        autoFocus={true}
        value={user.name}
        onChange={(e) => handleOnChange(e)}
        onKeyDown={(e) => handleOnKeyDown(e)}
        placeholder="Enter user name"
      />
      <button onClick={() => addUser(user)}>Add User</button>
    </div>
  );
};

export default UserForm;
