
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, 
  TextInput,
  TouchableOpacity } 
  from 'react-native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import logo from '../assets/logo.png'; 




export default function Login({navigation}) { 
  
  const pressHandler = () => {
    navigation.navigate('Home')
  }   

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={{ width: '30%', height: '20%' }} /> 
            <View>
              <TextInput style={styles.input} placeholder='Email'/>
              <TextInput style={styles.input} placeholder='Password'secureTextEntry/>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.userBtn}
                  onPress={pressHandler}
                >
                <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.userBtn}
                  onPress={() => alert('Coming soon!')}
                >
                <Text style={styles.btnText}>Signup</Text>
                </TouchableOpacity>
              </View>         
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
    width: 300,
    backgroundColor: '#E8F3F1',
    borderColor: '#4CCCAC',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    marginTop: 15,
    alignSelf: 'center'
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 25,
    marginTop: 25
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





