import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';

const CustomSafeAreaView = props => (
  <SafeAreaView style={styles.container} {...props} />
);

export default CustomSafeAreaView;
