import styled from 'styled-components/native';
import View from '../../components/View';
import ButtonBase from '../../components/Button';

export const Container = styled(View)`
  flex: 1;
  background-color: white;
`;

export const Button = styled(ButtonBase)`
  position: absolute;
  bottom: 24;
`;
