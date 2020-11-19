import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Chat from "../screens/chat";
import Profile from "../screens/profile";

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
const profileStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#fff', height: 60 }
    }
});

export default createAppContainer(profileStack);

