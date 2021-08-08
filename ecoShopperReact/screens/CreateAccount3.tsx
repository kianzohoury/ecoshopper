import * as React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { View } from '../components/Themed';

export default function CreateAccountPage3() {
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
    slidebar: {
      fontSize: 30,
      marginBottom: 100,
    },
  });


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap your goals below. </Text>
      <Text style={styles.slidebar}>[Slidebar goes here]</Text>
      <BlackButton onPress={() => {
        console.log('CA2 page next button press');
      }} text='Next >' />
      <Text>Changes can be made later under Settings.</Text>
    </View>
  );
}

