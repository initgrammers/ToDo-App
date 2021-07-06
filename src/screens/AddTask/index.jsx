import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FormTask from '../../views/FormTask';
import actions from '../../redux/actions';
import generateUuid from '../../utils/uuid';
import {getRandomColor} from '../../utils/constants';

const AddTask = ({addNewTask, navigation}) => {
  const handleSubmit = task => {
    addNewTask({
      ...task,
      createAt: new Date().valueOf(),
      id: generateUuid(),
      color: getRandomColor(),
    });
    navigation.goBack();
  };

  return <FormTask onSubmit={handleSubmit} />;
};

AddTask.propTypes = {
  addNewTask: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = {
  addNewTask: actions.addNewTask,
};

export default connect(null, mapDispatchToProps)(AddTask);
