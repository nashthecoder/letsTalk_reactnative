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
  TextInput } 
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
      
      <Button 
        title ='Browsing?'
        onPress={() =>
        Alert.alert('Hey', 'Want to know more?', [
            {text: 'Yes'},
            {text: 'No'},
          ])
        }
        />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F3F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
 login: {
   color: 'black',
   fontWeight: '600',
   fontSize: 20,
 }
});
