import * as React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import { View } from '../components/Themed';
import { HomeButtons } from '../components/HomeButtons';

export default function HomeButtonsScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 100
    },
    input: {
      fontSize: 30,
      width: 300,
      textAlign: 'center',
      marginBottom: 100,
      borderBottomWidth: 2
    },
  });


  return (
    <View style={styles.container}>
      <HomeButtons></HomeButtons>
    </View>
  );
}

