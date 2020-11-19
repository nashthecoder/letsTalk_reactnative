
import React from 'react';
import { 
  View, 
  Text,
  StyleSheet
  } 
  from 'react-native';
import logo from './assets/logo.png';

export default function Home() {
  return (
    <View style={styles.btnContainer}>
      <Text>Content</Text>
      <Text>Content</Text>
      <Image source={logo} style={{ width: 305, height: 159 }} /> 
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  }
})