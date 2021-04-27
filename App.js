import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LogIn from './screens/LogIn';
import SignIn from './screens/SignIn';
import ResetPassword from './screens/ResetPassword';
import LoggedIn from './screens/LoggedIn/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} />  */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LogIn">
            <Stack.Screen name="LogIn" component={LogIn} options ={{ header: () => {} }}/>
            <Stack.Screen name="LoggedIn" component={LoggedIn} options ={{ header: () => {} }} />
            <Stack.Screen name="SignIn" component={SignIn} options ={{ header: () => {} }}/>
            <Stack.Screen name="ResetPassword" component={ResetPassword} options ={{ header: () => {} }} />
          </Stack.Navigator>
        </NavigationContainer>

        
      </SafeAreaProvider>
    );
  }
}
