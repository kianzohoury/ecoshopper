import * as React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { BlackButtonBorder } from '../components/BlackButtonBorder';
import { View } from '../components/Themed';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

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
      fontSize: 14
    },

    logoTitle: {
      paddingVertical: 250,
      fontSize: 60
    },

  });


  return (
    <View style={styles.container}>
    <Text style={styles.logoTitle}>ecoshopper</Text>
      <BlackButtonBorder onPress={() => {
        console.log(`Clicked Create Account`);
        navigation.navigate('CA1');
      }} text='Create Account'/>
      <Text style={styles.title}>Already Have An Account?</Text>
    </View>
  );
}
