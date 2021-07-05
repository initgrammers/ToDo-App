import React from 'react';
import PropTypes from 'prop-types';
import View from '../../components/View';
import TaskList from '../../components/TaskList';
import Button from '../../components/Button';
import {propTypeTask} from '../../propTypes';
import styles from './styles';

const TaskListView = ({tasks, toggleStateTask, addTask}) => (
  <View style={styles.container}>
    <TaskList tasks={tasks} onPress={task => toggleStateTask(task)} />
    <Button onPress={addTask} style={styles.button} title="Add a task" />
  </View>
);

TaskListView.propTypes = {
  tasks: PropTypes.arrayOf(propTypeTask),
  toggleStateTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default TaskListView;
