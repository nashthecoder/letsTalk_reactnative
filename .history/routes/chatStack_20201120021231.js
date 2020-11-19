import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import Home from '../screens/home';
import Chat from "../screens/chat";
import Profile from "../screens/profile";

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

