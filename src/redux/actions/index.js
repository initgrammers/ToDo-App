import taskTypes from '../actionsTypes/task';

const markAsCompleted = id => ({
  type: taskTypes.MARK_AS_COMPLETED,
  payload: {
    id,
  },
});

const markAsUncompleted = id => ({
  type: taskTypes.MARK_AS_UNCOMPLETED,
  payload: {
    id,
  },
});

const toggleStateTask = (id, currenState) =>
  currenState ? markAsUncompleted(id) : markAsCompleted(id);

export default {
  toggleStateTask,
};
