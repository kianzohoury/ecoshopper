import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { HomeEcoScore } from '../components/HomeEcoScore';
import { HomeButtons } from '../components/HomeButtons';
import { HomeHistory } from '../components/HomeHistory';

export default function NewsScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: colors.background
    },
    imageBackground: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start'
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
      <Text>NewsScreen</Text>
    </View>
  );
}

