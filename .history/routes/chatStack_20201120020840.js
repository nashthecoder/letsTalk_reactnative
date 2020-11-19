import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import Home from '../screens/home';
import Chat from "../screens/chat";
import Profile from "../screens/profile";


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Content',
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
        title: 'Ask',
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
        title: 'Profile',
        }
    }
};

// home stack navigator screens
const chatStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#fff', height: 60 }
    }
});

export default ChatStack;

