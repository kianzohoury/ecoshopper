import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import TabOneScreen from './screens/TabOneScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabOneScreen} />
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
