import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Chat from "../screens/chat";
import Login from "../screens/login";
import Profile from "../screens/profile";
import Services from "../screens/services";

const screens = {
    Login: {
        screen: Login
    },
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
    },
    Services: {
        screen: Services,
        navigationOptions: {
        title: 'Find',
        }
    },
};

// home stack navigator screens
const chatStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#fff', height: 60 }
    }
});

export default ChatStack;

