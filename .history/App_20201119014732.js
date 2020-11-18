import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {  } from 'react-native-gesture-handler';
import Navigator from './routes/homeStack';

export default function App() {
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
      }}>
          <Navigator />
      </TouchableWithoutFeedback>
    );
  } 