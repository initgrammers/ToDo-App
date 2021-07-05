import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SafeAreaView from './src/components/SafeAreaView';
import Navigator from './src/navigator';
import {persistedStore} from './src/redux';

const {store, persistor} = persistedStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <Navigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;

// {/* <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <StatusBar style="auto" />
//         <Task onPress={() => {}} title="Hola mundo"  color="blue"/>
//         <Task onPress={() => {}} title="Hola mundo"  color="blue"/>
//         <Task onPress={() => {}} title="Hola mundo"  color="blue"/>
//         <Task onPress={() => {}} title="Hola mundo"  color="blue"/>
//         <Task onPress={() => {}} title="Hola mundo"  color="blue"/>
//       </View> */}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
