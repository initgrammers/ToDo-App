import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {formatCompletedTaskToProps} from '../../utils/format';
import actions from '../../redux/actions';
import TaskListView from '../../views/TaskList';
import {propTypeTask} from '../../propTypes';

const Completed = ({tasks, toggleStateTask, navigation}) => (
  <TaskListView
    tasks={tasks}
    toggleStateTask={task => toggleStateTask(task.id, task.completed)}
    addTask={() => navigation.navigate('AddTask')}
  />
);

Completed.propTypes = {
  tasks: PropTypes.arrayOf(propTypeTask),
  toggleStateTask: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  tasks: formatCompletedTaskToProps(state.tasks),
});

const mapDispatchToProps = {
  toggleStateTask: actions.toggleStateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Completed);
