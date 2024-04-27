export const addTask = (taskName) => {
  return {
    type: 'ADD_TASK',
    payload: {
      task: taskName,
    },
  };
};

export const removeTask = (taskId) => {
  return {
    type: 'REMOVE_TASK',
    payload: {
      id: taskId,
    },
  };
};
