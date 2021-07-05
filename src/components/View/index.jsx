import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: ${props =>
    props.theme.colors[props.background] || props.background};
  margin: ${props => props.margin}px;
  padding: ${props => props.padding}px;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  height: ${props => (props.height ? `${props.height}px` : 'auto')};
  border-radius: ${props => props.borderRadius}px;
  border-width: ${props => props.borderWidth}px;
  border-color: ${props =>
    props.theme.colors[props.borderColor] || props.borderColor};
  margin-top: ${props => props.marginTop || props.margin}px;
  margin-right: ${props => props.marginRight || props.margin}px;
  margin-bottom: ${props => props.marginBottom || props.margin}px;
  margin-left: ${props => props.marginLeft || props.margin}px;
  padding-top: ${props => props.paddingTop || props.padding}px;
  padding-right: ${props => props.paddingRight || props.padding}px;
  padding-bottom: ${props => props.paddingBottom || props.padding}px;
  padding-left: ${props => props.paddingLeft || props.padding}px;
`;

StyledView.defaultProps = {
  paddingLeft: undefined,
  paddingBottom: undefined,
  paddingRight: undefined,
  paddingTop: undefined,
  marginLeft: undefined,
  marginBottom: undefined,
  marginRight: undefined,
  marginTop: undefined,
  borderColor: 'black',
  borderWidth: 0,
  borderRadius: 0,
  height: undefined,
  width: undefined,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  padding: 0,
  margin: 0,
  background: 'transparent',
  theme: {
    colors: {
      red: 'red',
    },
  },
};

export default StyledView;
