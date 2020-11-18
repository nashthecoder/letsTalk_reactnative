import React from 'react';
import { 
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> The app</Text>
    </View>
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

