import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableUser = ({ user }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const styles = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={styles}
      {...attributes}
      {...listeners}
      key={user.id}
      className="user"
    >
      {' '}
      {user.name}
    </div>
  );
};

export default SortableUser;
