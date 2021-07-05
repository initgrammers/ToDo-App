import React from 'react';
import styled from 'styled-components/native';
import PickerModal from 'react-native-picker-modal-view';
import PropTypes from 'prop-types';
import {Entypo} from '@expo/vector-icons';
import TextInput from '../TextInput';
import View from '../View';

const StyledButton = styled.TouchableOpacity`
  width: auto;
  align-items: flex-start;
  flex: 1;
`;

const Select = ({field, value, format, onChange, items}) => {
  return (
    <View flexDirection="row">
      <PickerModal
        renderSelectView={(disabled, selected, showModal) => (
          <StyledButton onPress={showModal}>
            <TextInput
              field={field}
              editable={false}
              icon={<Entypo name="chevron-down" size={24} color="#d3d3d3" />}
              value={value[format]}
            />
          </StyledButton>
        )}
        items={items}
        onSelected={onChange}
      />
    </View>
  );
};

Select.propTypes = {
  field: PropTypes.string,
  value: PropTypes.object,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Select.defaultProps = {
  field: '',
  value: {},
  format: 'Name',
};

export default Select;
