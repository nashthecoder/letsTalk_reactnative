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


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/lets_talk_logo.png')} />
      <Text style={styles.login}> Login </Text>
      <TextInput 
        style={styles.input}
        placeholder='Username'
         />
      <TextInput 
        style={styles.input}
        placeholder='Password'
         />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}
        >
        <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userBtn}
        >
        <Text style={styles.btnText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
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

 },

 userBtn: {
   width: '90%',
   padding: 15,
   backgroundColor: '#B80072',
   borderRadius: 100,
   marginBottom: 40,
   marginTop: 10,
 },

  btnText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
    alignItems: 'center',
  }
});
