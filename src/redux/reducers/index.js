import taskTypes from '../actionsTypes/task';
import initialState from './initialState.json';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskTypes.ADD_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: action.payload,
        },
      };

    case taskTypes.MARK_AS_COMPLETED:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            completed: true,
          },
        },
      };
    case taskTypes.MARK_AS_UNCOMPLETED:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            completed: false,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
