
import React from 'react';
import { View, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationContainer from '@react-navigation/native';

export default function Home() {

  
  return (
    <View>
      <View>
        <Text>Home</Text>
        <Text>Services</Text>
        <Text>Ask</Text>
        <Text>Profile</Text>
      </View>
    </View>
  )
}

