import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  Alert, 
  Button, 
  TextInput,
  TouchableOpacity } 
  from 'react-native';
// import { useDimensions } from '@react-native-community/hooks';
//SafeAreaView render content within the safe area boundaries of a device in iOS , ise Platform for Android 
// and add padding via the StatusBar.height in the StyleSheet.create
//Image component allows you to render images on the app //


function LoginScreen({ navigation }) {
  return (
        <SafeAreaView style={styles.container}>
          <Image source={require('./assets/lets_talk_logo.png')} style={{width: '30%', height:'20%'}} />
          <TextInput 
            style={styles.input}
            placeholder='Username'
            />
          <TextInput 
            style={styles.input}
            placeholder='Password'
            secureTextEntry
            />
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => navigation.navigate('Content')}
            >
            <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => alert('Signup works')}
            >
            <Text style={styles.btnText}>Signup</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>  
  );
}

function ContentScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Content Here</Text>
    </View>

  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Content" component={ContentScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
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

