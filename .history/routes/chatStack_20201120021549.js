import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Chat from "../screens/chat";


const screens = {
    Chat: {
      screen: Chat,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />
        }
      },
    },
  }


// home stack navigator screens
const ChatStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#fff', height: 60 }
    }
});

export default ChatStack;

