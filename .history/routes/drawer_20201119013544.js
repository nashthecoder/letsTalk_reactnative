import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import AskStack from './askStack';
import ProfileStack from './profileStack';
import LoginStack from './loginStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Ask: {
    screen: AskStack,
  },
  Profile: {
    screen: ProfileStack,
  },
  Login: {
    screen: LoginStack,
  },
});

export default createAppContainer(RootDrawerNavigator);