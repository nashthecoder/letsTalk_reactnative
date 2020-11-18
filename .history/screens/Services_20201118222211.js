
import React from 'react';
import { View, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Services() {
  return (
    <View>
      <Text>Services</Text>
    </View>
  );
}/* import * as React from 'react';
import { View, Text, Button, TouchableOpacityBase } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from './chat';
import Profile from './profile';
import { 
  StyleSheet,
  TouchableOpacity
}
from 'react-native';

function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text>Put content here...</Text>
        <View style={styles.navContainer}>
        </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <View style={styles.container}>
      <Tab.Navigator style={styles.tabContainer}>
        <Tab.Screen name="Find" component={ServicesScreen} options={{ tabBarLabel: 'Find'}} />
        <Tab.Screen name="Ask" component={ChatScreen} options={{ tabBarLabel: 'Ask'}} />
        <Tab.Screen name="Share" component={ProfileScreen} options={{ tabBarLabel: 'Share'}} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 15,
    backgroundColor: '#B80072',
    alignSelf: 'center',
   },

});
export default ServicesScreen; */