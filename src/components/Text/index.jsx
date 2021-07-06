import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: ${props => props.theme.colors[props.color] || props.color};
  text-align: ${props => props.textAlign};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize}px;
`;

StyledText.defaultProps = {
  fontSize: 14,
  textAlign: 'left',
  color: '#000',
  fontWeight: 'normal',
  theme: {
    colors: {
      red: 'red',
    },
  },
};

export default StyledText;
