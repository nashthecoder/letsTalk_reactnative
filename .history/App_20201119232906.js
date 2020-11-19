import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
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