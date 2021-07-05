import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from '../MainTab';
import AddTask from '../../screens/AddTask';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="AddTask" component={AddTask} />
  </Stack.Navigator>
);
