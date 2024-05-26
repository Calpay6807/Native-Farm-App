import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../pages/splashScreen';
import SignIn from '../pages/signIn';

import TabNavigator from './tabNavigator';
import Home from '../pages/home';
import AnimalDetail from '../pages/home/detail';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={'splash'}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SignIn'}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Tab'}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Animal-Detail'}
        component={AnimalDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
