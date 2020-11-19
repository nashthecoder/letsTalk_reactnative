import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import ChatStack from './askStack';
import ProfileStack from './profileStack';


// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Ask: {
    screen: CskStack,
  },
  Profile: {
    screen: ProfileStack,
  },
});

export default createAppContainer(RootDrawerNavigator);