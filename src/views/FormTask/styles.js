import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  container: {
    height: Dimensions.get('window').height - 90,
  },
  flex1: {
    flex: 1,
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 24,
  },
});

export default styles;
