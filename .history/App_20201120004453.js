import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Content Screen</Text>
      <Button
        title="Find"
        onPress={() => navigation.navigate('Find')}
      />
      <Button
        title="Ask"
        onPress={() => navigation.navigate('Ask')}
      />
      <Button
        title="Share"
        onPress={() => navigation.navigate('Share')}
      />
    </View>
  );
}

function ServicesScreen({ navigation }) {
  return (
    <View>
      <Text>Find Screen</Text>
      <Button
        title="Ask"
        onPress={() => navigation.navigate('Ask')}
      />
      <Button
        title="Share"
        onPress={() => navigation.navigate('Share')}
      />
    </View>
  );
}

function ChatScreen({ navigation }) {
  return (
    <View>
      <Text>Ask Screen</Text>
      <Button
        title="Find"
        onPress={() => navigation.navigate('Find')}
      />
      <Button
        title="Ask"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Now what?"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}


const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Content" component={HomeScreen} />
          <Stack.Screen name="Find" component={ServicesScreen} />
          <Stack.Screen name="Ask" component={ChatScreen} />
          <Stack.Screen name="Share" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
          
    );
  } 