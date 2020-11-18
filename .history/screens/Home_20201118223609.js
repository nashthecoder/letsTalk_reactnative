
import React from 'react';
import { View, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationContainer from '@react-navigation/native';

export default function Home() {

  const Tab = createBottomTabNavigator();
  
  return (
  <NavigationContainer>
    <View>
      <View>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Text>Home</Text>
        <Text>Services</Text>
        <Text>Ask</Text>
        <Text>Profile</Text>
      </Tab.Navigator>
      </View>
    </View>
  </NavigationContainer>
  )
}

