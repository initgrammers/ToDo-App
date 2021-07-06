import React from 'react';
import styled from 'styled-components/native';
import View from '../View';
import Text from '../Text';
import PropTypes from 'prop-types';

const StyledTextInput = styled.TextInput`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
`;

const CustomTextInput = ({field, icon, error, ...rest}) => (
  <View marginRight={12} marginLeft={12} marginTop={12}>
    <Text fontWeight="bold">{field}</Text>
    <View
      flexDirection="row"
      marginTop={8}
      background="#f9f9f8"
      alignItems="center"
      paddingRight={8}>
      <StyledTextInput {...rest} />
      {icon && icon}
    </View>
    <Text color="red">{error}</Text>
  </View>
);

CustomTextInput.propTypes = {
  field: PropTypes.string,
  icon: PropTypes.element,
  error: PropTypes.string,
};

CustomTextInput.defaultProps = {
  field: '',
  icon: undefined,
  error: '',
};

export default CustomTextInput;
