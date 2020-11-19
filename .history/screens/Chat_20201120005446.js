
import React from 'react';
import { View, Text, } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvhkh3puB_4vx095hyDLocv-HcLKV2Msg",
  authDomain: "reactnative-letstalk.firebaseapp.com",
  databaseURL: "https://reactnative-letstalk.firebaseio.com",
  projectId: "reactnative-letstalk",
  storageBucket: "reactnative-letstalk.appspot.com",
  messagingSenderId: "477318412736",
  appId: "1:477318412736:web:2290e024dd676cff35f025"
};

firebase.initializeApp(firebaseConfig);

export default function Chat() {
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

function ChatScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen</Text>
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
          name="Chat"
          component={ChatScreen}
          options={{ title: 'Ask Me' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ChatScreen; */