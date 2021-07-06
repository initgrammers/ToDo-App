import styled from 'styled-components/native';
import {Dimensions, ScrollView as ScrollViewBase} from 'react-native';
import ViewBase from '../../components/View';
import ButtonBase from '../../components/Button';
import DateTimePickerBase from '../../components/DateTimePicker';

export const Content = styled(ViewBase)`
  height: ${Dimensions.get('window').height - 120}px;
  padding: 8px;
`;

export const ScrollView = styled(ScrollViewBase)`
  width: 100%;
  background-color: white;
`;

export const Button = styled(ButtonBase)`
  align-self: center;
  position: absolute;
  bottom: 24px;
`;

export const DateTimePicker = styled(DateTimePickerBase)`
  flex: 1;
`;
