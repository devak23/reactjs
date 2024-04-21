import './Users.css';
import { useState } from 'react';
import { data } from './data/data';
import { closestCenter, DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableUser from './SortableUser';

const Users = () => {
  const [users, setUsers] = useState(data);
  const [inputValue, setInputValue] = useState('');

  const addUser = () => {
    const newUser = {
      id: Date.now().toString(),
      name: inputValue,
    };
    setInputValue('');
    setUsers((users) => [...users, newUser]);
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    setUsers((users) => {
      const oldIndex = users.findIndex((u) => u.id === active.id);
      const newIndex = users.findIndex((u) => u.id === over.id);
      return arrayMove(users, oldIndex, newIndex);
    });
    console.log('Dragging ended', event);
  };

  return (
    <div className="users">
      <div>Total: {users.length}</div>
      <div className="users-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>
      <div>
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={users} strategy={verticalListSortingStrategy}>
            {users.map((user) => (
              <SortableUser key={user.id} user={user} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Users;
