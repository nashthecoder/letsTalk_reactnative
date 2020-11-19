import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Profile from "../screens/profile";


const screens = {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />
        }
      },
    },
  }


// home stack navigator screens
const ProfileStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#fff', height: 60 }
    }
});

export default ProfileStack;