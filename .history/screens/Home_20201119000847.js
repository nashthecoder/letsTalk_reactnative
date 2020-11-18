
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity  } 
  from 'react-native';
  import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Find')
  }
  
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity 
        onPress={pressHandler}>
      <Text style={styles.screen}>Find</Text>
      </TouchableOpacity>  
      <StatusBar style="auto" />
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