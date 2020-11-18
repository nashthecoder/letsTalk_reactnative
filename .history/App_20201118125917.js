import React from 'react';
import { 
  StyleSheet,
  View
} from 'react-native';
import Home from './screens/home';

export default function App() {
  return (
    <Home />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  loginLink: {
    paddingTop: '10%',
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
})

