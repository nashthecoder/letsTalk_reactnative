import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text } from 'react-native';
import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Content Screen</Text>
      <Button
        title="Now what?"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function ServicesScreen({ navigation }) {
  return (
    <View>
      <Text>Find Screen</Text>
      <Button
        title="Now what?"
        onPress={() => navigation.navigate('Services')}
      />
    </View>
  );
}

function ChatScreen({ navigation }) {
  return (
    <View>
      <Text>Ask Screen</Text>
      <Button
        title="Now what?"
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