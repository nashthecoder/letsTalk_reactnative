
import React from 'react';
import { View, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Profile() {
  return (
    <View>
      <View>
        <Text>File</Text>
        <Text>Picture</Text>
        <Text>Audio</Text>
        <Text>Video</Text>
      </View>
    </View>
  );
}
/* import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'My profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ProfileScreen; */