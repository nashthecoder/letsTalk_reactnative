
import React from 'react';
import { View, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationContainer from '@react-navigation/native';

export default function Home() {

  
  return (
    <View>
      <View style={styles.container}>
        <Tab.Navigator style={styles.tabContainer}>
          <Tab.Screen name="Find" component={ServicesScreen} options={{ tabBarLabel: 'Find'}} />
          <Tab.Screen name="Ask" component={ChatScreen} options={{ tabBarLabel: 'Ask'}} />
          <Tab.Screen name="Share" component={ProfileScreen} options={{ tabBarLabel: 'Share'}} />
        </Tab.Navigator>
      </View>
    </View>
  )
}

