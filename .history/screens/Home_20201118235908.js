
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationContainer from '@react-navigation/native';

export default function Home() {

  const pressHandler = () => {
    navigation.navigate('Find')
  }
  
  return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity onPress={pressHandler}>
      <Text style={styles.screenLink}>Find</Text>
      </TouchableOpacity>  
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

