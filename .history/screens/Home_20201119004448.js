
import { Link } from '@react-navigation/native';
import { CreateBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity  } 
  from 'react-native';

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.push('Find')
  }
  
  return (
    <View style={styles.btnContainer}>
      <CreateBottomTabNavigator />
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