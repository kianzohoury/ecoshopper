import * as React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { View } from '../components/Themed';

export default function CreateAccountPage2({ navigation }: { navigation: any }) {
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
      textAlign: 'center',
      marginBottom: 100
    },
    sidebar: {
      fontSize: 30,
      marginBottom: 100,
    },
  });


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Describe your current level of recycling. </Text>
      <Text style={styles.sidebar}>[Slidebar goes here]</Text>
      <BlackButton onPress={() => {
        console.log('CA2 page next button press');
        navigation.navigate('CA3');
      }}>{'Next >'}</BlackButton>
      <BlackButton onPress={() => {
        navigation.navigate('NotFoundScreen');
      }}>{'Not >'}</BlackButton>
      <BlackButton onPress={() => {
        navigation.navigate('FoundScreen');
      }}>{'Found'}</BlackButton>
    </View>
  );
}
