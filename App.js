import { View } from 'react-native';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

import { store } from './store';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'uber-move-medium': require('./assets/fonts/UberMoveMedium.otf'),
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View>
        <HomeScreen />
      </View>
    </Provider>
  );
}
