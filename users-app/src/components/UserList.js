import './UserList.css';
import { FaCircleXmark } from 'react-icons/fa6';

const UserList = ({ users, handleDeleteUser }) => {
  const deleteUser = (e, user) => {
    handleDeleteUser(user);
    e.preventDefault();
  };

  return (
    <div className="userListContainer">
      {users.map((user) => (
        <div className="user" key={user.id}>
          {user.name}
          <a href="#" onClick={(e) => deleteUser(e, user)}>
            <FaCircleXmark />
          </a>
        </div>
      ))}
    </div>
  );
};

export default UserList;
