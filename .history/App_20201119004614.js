import React, { useState } from 'react';
import Navigator from './routes/homeStack';
import { CreateBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
    return (
      <Navigator />
      <CreateBottomTabNavigator /> 
    );
  } 