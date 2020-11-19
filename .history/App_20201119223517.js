import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Navigator from './routes/homeStack';
import logo from './assets/logo.png';

export default function App() {
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
      }}>
          <Navigator />
          <Image source={logo} style={{ width: 305, height: 159 }} />
      </TouchableWithoutFeedback>
    );
  } 