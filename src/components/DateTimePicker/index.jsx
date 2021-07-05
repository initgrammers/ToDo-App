import React, {useState} from 'react';
import styled from 'styled-components/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {AntDesign} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import View from '../View';
import lbDate from '../../utils/date';

const StyledButton = styled.TouchableOpacity`
  width: auto;
  align-items: flex-start;
`;

const CustomDateTimePicker = ({
  field,
  value,
  format,
  onChange,
  style,
  mode,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = _date => {
    onChange(_date);
    hideDatePicker();
  };

  return (
    <View style={style}>
      <StyledButton onPress={showDatePicker}>
        <TextInput
          field={field}
          editable={false}
          icon={<AntDesign name="clockcircleo" size={24} color="#d3d3d3" />}
          value={lbDate.format(value, format)}
        />
      </StyledButton>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

CustomDateTimePicker.propTypes = {
  field: PropTypes.string,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.instanceOf(Date),
  mode: PropTypes.oneOf(['date', 'time', 'datetime']),
};

CustomDateTimePicker.defaultProps = {
  value: new Date(),
  field: '',
  format: 'dd/MM/yyyy p',
  mode: 'datetime',
};

export default CustomDateTimePicker;
