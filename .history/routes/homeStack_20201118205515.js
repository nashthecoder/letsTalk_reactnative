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
        screen: Home
    },
    Chat: {
        screen: Chat
    },
    Profile: {
        screen: Profile
    },
    Services: {
        screen: Services
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

