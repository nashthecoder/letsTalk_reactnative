import { createStackNavigator } from '@react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from "../screens/home";
import Chat from "../screens/chat";
import Login from "../screens/login";
import Profile from "../screens/profile";
import Services from "../screens/services";

const screens = {
    Home: {
        screen: Home
    },
    Chat: {
        screen: Chat
    },
    Login: {
        screen: Login
    },
    Profile: {
        screen: Profile
    },
    Services: {
        screen: Services
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);