import React from 'react';
import {TouchableOpacity} from 'react-native';
import View from '../View';
import Text from '../Text';
import Checkbox from '../Checkbox';
import PropTypes from 'prop-types';

const Task = ({completed, onPress, title, color}) => {
  return (
    <TouchableOpacity>
      <View flexDirection="row" alignItems="center" padding={20}>
        <Checkbox
          marginRight={10}
          onChange={onPress}
          value={completed}
          color={color}
        />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

Task.propTypes = {
  completed: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
};

Task.defaultProps = {
  completed: false,
  title: '',
  color: '#f44336',
};

export default Task;
