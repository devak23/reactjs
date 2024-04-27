export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETET_TASK';

export const addTask = (taskName) => {
  return {
    type: ADD_TASK,
    payload: {
      task: taskName,
    },
  };
};

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: {
      id: taskId,
    },
  };
};

export const completeTask = (taskId) => {
  return {
    type: COMPLETE_TASK,
    payload: {
      id: taskId,
    },
  };
};

let index = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: index++,
          task: action.payload.task,
        },
      ];

    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);

    case COMPLETE_TASK:
      return state.map((task) =>
        task.id !== action.payload.id ? task : { ...task, completed: true },
      );

    default:
      return state;
  }
}
