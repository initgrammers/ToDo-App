import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from '../MainTab';
import AddTask from '../../screens/AddTask';
import MainHeader from '../../components/MainHeader';
import BackHeader from '../../components/BackHeader';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainTab"
      component={MainTab}
      options={{
        header: MainHeader,
      }}
    />
    <Stack.Screen
      name="AddTask"
      component={AddTask}
      options={{
        headerTitle:'Add task',
        header: BackHeader,
      }}
    />
  </Stack.Navigator>
);
