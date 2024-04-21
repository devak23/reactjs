import './UserForm.css';
import { useRef, useState } from 'react';

const UserForm = ({ handleUserAdded }) => {
  const [user, setUser] = useState({ id: '', name: '' });
  const userInput = useRef();

  const addUser = (event) => {
    handleUserAdded(user);
    setUser({ id: '', name: '' });
    userInput.current.focus();
  };

  const handleOnChange = (event) => {
    setUser({
      id: Date.now().toString(),
      name: event.target.value,
    });
    event.preventDefault();
  };

  return (
    <div className="userFormContainer">
      <input
        ref={userInput}
        type="text"
        autoFocus={true}
        value={user.name}
        onChange={(e) => handleOnChange(e)}
        placeholder="Enter user name"
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default UserForm;
