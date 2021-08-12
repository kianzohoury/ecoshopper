import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import CreateAccountPage1 from './screens/CreateAccount1';
import CreateAccountPage2 from './screens/CreateAccount2';
import CreateAccountPage3 from './screens/CreateAccount3';
import CreateLoadingPage from './screens/Loading'
import LoginScreen from './screens/LoginScreen'
import ScanScreen from './screens/ScanScreen';
import HomeButtonsScreen from './screens/homeButtonsScreen';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import CreateFoundScreen from './screens/FoundScreen';
import CreateLocationScreen from './screens/LocationScreen';

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: '#000000',
    background: '#FDD329',
    card: '#FDD329',
    text: '#000000',
    border: '#00000000',
    notification: '#ffffff'
  },
};


export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Welcome, User.' }} />
        <Stack.Screen name="CA1" component={CreateAccountPage1} options={{ headerShown: false }} />
        <Stack.Screen name="CA2" component={CreateAccountPage2} options={{ headerShown: false }} />
        <Stack.Screen name="CA3" component={CreateAccountPage3} options={{ headerShown: false }} />
        <Stack.Screen name="Scan" component={ScanScreen} options={{}} />
        <Stack.Screen name="Loading" component={CreateLoadingPage} options={{ headerShown: false }} />
        <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FoundScreen" component={CreateFoundScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LocationScreen" component={CreateLocationScreen} options={{  headerShown: false }} />
        <Stack.Screen name="HomeButtonsScreen" component={HomeButtonsScreen} options={{ title: 'Welcome, User.' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }
