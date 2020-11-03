import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

//SafeAreaView render content within the safe area boundaries of a device //
//Image component allows you to render images on the app //

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
      <Image source={require('./assets/lets_talk_logo.png')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
