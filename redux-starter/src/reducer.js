import { ADD_TASK, REMOVE_TASK } from './actionTypes';

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

    default:
      return state;
  }
}
