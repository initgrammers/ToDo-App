import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import All from '../../screens/All';
import Completed from '../../screens/Completed';
import Uncompleted from '../../screens/Uncompleted';
import Favorite from '../../screens/Favorite';
import TabBar from '../../components/TabBar';

const Tab = createMaterialTopTabNavigator();

export default () => (
  <Tab.Navigator tabBar={props => <TabBar {...props} />}>
    <Tab.Screen name="All" component={All} />
    <Tab.Screen name="Completed" component={Completed} />
    <Tab.Screen name="Uncompleted" component={Uncompleted} />
    <Tab.Screen name="Favorite" component={Favorite} />
  </Tab.Navigator>
);
