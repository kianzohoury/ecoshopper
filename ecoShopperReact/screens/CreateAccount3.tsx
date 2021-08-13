import * as React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { useTheme, StackActions } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { View } from '../components/Themed';
import GoalBubbles from '../components/GoalBubbles';

export default function CreateAccountPage3({ navigation, route }: { navigation: any, route: any }) {
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
      <GoalBubbles />
      <BlackButton onPress={() => {
        navigation.dispatch(StackActions.popToTop())
        navigation.navigate('Tabs', {
          screen: 'Home',
          params: { user: route.params?.user, score: 102 }
        });
      }}>{'Next >'}</BlackButton>
      <Text style={{ marginTop: 10 }}>Changes can be made later under Settings.</Text>
    </View>
  );
}
