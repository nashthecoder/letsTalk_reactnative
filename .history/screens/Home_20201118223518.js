
import React from 'react';
import { View, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationContainer from '@react-navigation/native';

export default function Home() {

  const Tab = createBottomTabNavigator();
  
  return (
  <NavigationContainer>
    <View>
      <View>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Text>Home</Text>
        <Text>Services</Text>
        <Text>Ask</Text>
        <Text>Profile</Text>
      </Tab.Navigator>
      </View>
    </View>
  </NavigationContainer>
  );
}

/* import 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();

/* function App() {
  return (
    <NavigationContainer style={styles.navContainer}>
        <View>
            <TouchableOpacity style={styles.loginLink}
            onPress={() => navigation.navigate('Login')} 
            >
              <Text>Back to Login</Text>
            </TouchableOpacity>
        </View>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Ask" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} */
 