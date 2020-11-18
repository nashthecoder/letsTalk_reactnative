import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function MyTabs() {
    const Tab = createBottomTabNavigator();
    
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }