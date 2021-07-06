import React from 'react';
import PropTypes from 'prop-types';
import TaskList from '../../components/TaskList';
import {propTypeTask} from '../../propTypes';
import {Container, Button} from './Styled';

const TaskListView = ({tasks, toggleStateTask, addTask}) => (
  <Container>
    <TaskList tasks={tasks} onPress={task => toggleStateTask(task)} />
    <Button onPress={addTask} title="Add a task" />
  </Container>
);

TaskListView.propTypes = {
  tasks: PropTypes.arrayOf(propTypeTask),
  toggleStateTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default TaskListView;
