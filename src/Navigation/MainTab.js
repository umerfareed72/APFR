import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/About';
import Home from '../screens/Home';
import Team from '../screens/Team';
import Degrees from '../screens/Degrees';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Degress" component={Degrees} />
     
      <Tab.Screen name="Team" component={Team} />
      <Tab.Screen name="About" component={About} />
   
    </Tab.Navigator>
    </NavigationContainer>
  );
}