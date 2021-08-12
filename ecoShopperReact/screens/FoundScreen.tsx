import * as React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { BlackButtonBorder } from '../components/BlackButtonBorder';
import { View } from '../components/Themed';


export default function CreateFoundScreen({ route, navigation }) {
  const { colors } = useTheme();
  const { result } = route.params;

  navigation.navigate('FoundScreen');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      paddingTop: 0,
    },

    title: {
      paddingTop: 20,
      fontSize: 40
    },

    logoTitle: {
      paddingVertical: 250,
      fontSize: 60
    },

  });


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Found Screen</Text>
    </View>
  );
}
