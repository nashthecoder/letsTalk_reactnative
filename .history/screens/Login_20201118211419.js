
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



export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Image source={require('.../assets/lets_talk_logo.png')} style={{width: '30%', height:'20%'}} />
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





