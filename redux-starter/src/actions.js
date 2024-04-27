import {ADD_TASK, COMPLETE_TASK, REMOVE_TASK} from './actionTypes';

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
      id: taskId
    }
  };
};
