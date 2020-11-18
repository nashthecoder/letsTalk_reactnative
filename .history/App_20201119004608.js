import React, { useState } from 'react';
import Navigator from './routes/homeStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
    return (
      <Navigator />
      <CreateBottomTabNavigator /> 
    );
  } 