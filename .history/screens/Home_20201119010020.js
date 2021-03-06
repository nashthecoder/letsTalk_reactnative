
import React from 'react';
import { 
  View, 
  Text,
  StyleSheet
  } 
  from 'react-native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Home() {
  return (
    <View style={styles.btnContainer}>
      <Text>Content</Text>
    </View>
      
  )
}

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>

    <View>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  }
})