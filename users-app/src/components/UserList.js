import './UserList.css';

const UserList = ({ users }) => {
  return (
    <div className="userListContainer">
      {users.map((user) => (
        <div className="user" key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default UserList;
