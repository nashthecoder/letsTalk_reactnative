/* import React from 'react';
import Home from './screens/home';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <Navigator />
  )
} */

import React, { useState } from 'react';
// import * as Font from 'expo-font';

import Navigator from './routes/homeStack';

/* const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
}); */

export default function App() {
  /* const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) { */
    return (
      <Navigator />
    );
  } /* else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  } 

}*/