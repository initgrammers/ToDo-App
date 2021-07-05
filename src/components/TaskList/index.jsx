import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';

const TaskList = ({tasks, onPress}) => (
  <>
    {tasks.map(task => (
      <Task
        key={task.id}
        completed={task.completed}
        onPress={() => onPress(task)}
        title={task.title}
        color={task.color}
      />
    ))}
  </>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool,
      color: PropTypes.string,
    }),
  ),
  onPress: PropTypes.func.isRequired,
};

export default TaskList;
