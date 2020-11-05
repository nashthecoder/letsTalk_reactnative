import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity } 
  from 'react-native';
// import { useDimensions } from '@react-native-community/hooks';
//SafeAreaView render content within the safe area boundaries of a device in iOS , ise Platform for Android 
// and add padding via the StatusBar.height in the StyleSheet.create
//Image component allows you to render images on the app //


function HomeScreen() {
  return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text>Content</Text>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>  
  );
}

function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>
    </View>
  );
}
function ServicesScreen() {
  return (
    <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
      <Text>Find</Text>
    </View>
  );
}
function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ask</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Ask" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  login: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
  input: {
    width: '90%',
    backgroundColor: '#E8F3F1',
    borderColor: '#4CCCAC',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  userBtn: {
    width: '45%',
    padding: 15,
    backgroundColor: '#B80072',
    borderRadius: 100,
  },
  btnText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  }
})

export default App;