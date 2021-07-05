import React from 'react';
import { TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import View from '../View';

const CustomCheckbox = ({value, color, onChange, ...rest}) => (
  <TouchableOpacity onPress={() => onChange(!value)}>
    <View
      width={30}
      height={30}
      borderRadius={10}
      justifyContent="center"
      background={value ? color : undefined}
      alignItems="center"
      borderWidth={2}
      borderColor={color}
      {...rest}
      >
      <Feather name="check" size={16} color="white" />
    </View>
  </TouchableOpacity>
);

CustomCheckbox.propTypes = {
  value: PropTypes.bool,
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

CustomCheckbox.defaultProps = {
  value: false,
  color: 'red',
};

export default CustomCheckbox;
