import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native-paper';

import { BlackButton } from '../components/BlackButton';
import { BlackButtonBorder } from '../components/BlackButtonBorder';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },

    title: {
      marginVertical: 20,
      fontSize: 16,
      fontWeight: 'bold'
    },

    logoTitle: {
      marginTop: 5,
      marginBottom: 40,
      fontSize: 60
    },

  });


  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.background} barStyle="dark-content" />
      <FontAwesome name="recycle" color="#000" size={48} />
      <Text style={styles.logoTitle}>ecoshopper</Text>
      <View style={{ alignItems: 'flex-start', width: '100%', paddingLeft: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', marginRight: 10 }}>The Eco-Forward</Text>
          <FontAwesome name="angle-right" color="#000" size={32} />
        </View>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Way to Shop</Text>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: Colors.orange700 }}>Scan. </Text>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: Colors.orange700 }}>Track. </Text>
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: Colors.orange700, marginBottom: 60 }}>Preserve. </Text>
      </View>
      <BlackButtonBorder onPress={() => {
        console.log(`Clicked Create Account`);
        navigation.navigate('CA1');
      }} text='Create Account' />
      <Text style={styles.title}>Already Have An Account?</Text>
    </View>
  );
}
