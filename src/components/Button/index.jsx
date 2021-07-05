import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import View from '../View';
import Text from '../Text';

const StyledButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${props =>
    props.theme.colors[props.background] || props.background};
  padding: 16px 8px;
  margin: 12px;
  border-radius: 12px;
`;

StyledButton.defaultProps = {
  background: '#5cbc75',
  theme: {
    colors: {},
  },
};

const CustomButton = ({title, onPress, ...rest}) => (
  <View flexDirection="row" {...rest}>
    <StyledButton onPress={onPress}>
      <Text textAlign="center" color="white" fontWeight="bold">
        {title}
      </Text>
    </StyledButton>
  </View>
);

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CustomButton;
