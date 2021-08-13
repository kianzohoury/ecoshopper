import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, TabRouter, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import UpcycleScreen from './screens/UpcycleScreen';

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
import NotFoundScreen from './screens/NotFoundScreen';
import FoundScreen from './screens/FoundScreen';
import CreateLocationScreen from './screens/LocationScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: '#FDD329',
    background: '#FDD329',
    card: '#FDD329',
    text: '#000000',
    border: '#00000000',
    notification: '#ffffff'
  },
};

function TabsScreen({ navigation, route }: { navigation: any, route: any }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      backBehavior="initialRoute"
      barStyle={{ backgroundColor: MyTheme.colors.background, height: 70}}
    >
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ user: route.params?.user && 'User', score: 900 }}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Upcycle"
        component={UpcycleScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bulb-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={TabsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CA1" component={CreateAccountPage1} options={{ headerShown: false }} />
        <Stack.Screen name="CA2" component={CreateAccountPage2} options={{ headerShown: false }} />
        <Stack.Screen name="CA3" component={CreateAccountPage3} options={{ headerShown: false }} />
        <Stack.Screen name="Scan" component={ScanScreen} options={{}} />
        <Stack.Screen name="Loading" component={CreateLoadingPage} options={{ headerShown: false }} />
        <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FoundScreen" component={FoundScreen} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



// export default function App() {
//   return (
//     <NavigationContainer theme={MyTheme}>
//       <Stack.Navigator>
//         <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Welcome, User.' }} />
//         <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="CA1" component={CreateAccountPage1} options={{ headerShown: false }} />
//         <Stack.Screen name="CA2" component={CreateAccountPage2} options={{ headerShown: false }} />
//         <Stack.Screen name="CA3" component={CreateAccountPage3} options={{ headerShown: false }} />
//         <Stack.Screen name="Scan" component={ScanScreen} options={{}} />
//         <Stack.Screen name="Loading" component={CreateLoadingPage} options={{ headerShown: false }} />
//         <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="FoundScreen" component={CreateFoundScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="LocationScreen" component={CreateLocationScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="HomeButtonsScreen" component={HomeButtonsScreen} options={{ title: 'Welcome, User.' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }


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
