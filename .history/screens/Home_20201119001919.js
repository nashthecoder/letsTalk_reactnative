
import { Link } from '@react-navigation/native';
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
        <Text>Find</Text>
        <Link onPress={pressHandler}/>
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