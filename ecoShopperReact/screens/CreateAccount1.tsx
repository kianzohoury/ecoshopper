import * as React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { View } from '../components/Themed';

export default function CreateAccountPage1({ navigation }: { navigation: any }) {
  const [text, onChangeText] = React.useState('');
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
      <Text style={styles.title}>What is your name? </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <BlackButton onPress={() => {
        console.log(`You inputted ${text}`);
        navigation.navigate('CA2');
      }} text='Next >' />

      {/* temp */}
      <BlackButton onPress={() => { navigation.navigate('Scan') }} text='Scan' />

    </View>
  );
}

