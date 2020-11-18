import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ChatScreen() {
  return (
    <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chat Screen</Text>
        <Text>Chat Screen</Text>
        <Text>Chat Screen</Text>
        <Text>Chat Screen</Text>
        <Text>Chat Screen</Text>
        <Text>Chat Screen</Text>
        <Text>Chat Screen</Text>
        <Text>Chat Screen</Text>
      </View>
    </ScrollView> 
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
          name="Chat"
          component={ChatScreen}
          options={{ title: 'Ask Me' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChatScreen;