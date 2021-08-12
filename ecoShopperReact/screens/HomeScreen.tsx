import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, StatusBar, Dimensions } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { HomeEcoScore } from '../components/HomeEcoScore';
import { HomeButtons } from '../components/HomeButtons';
import { HomeHistory } from '../components/HomeHistory';
import CirclesSvg from '../assets/images/CirclesSvg';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const screenWidth = Dimensions.get('window').width;
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
    svgBackground: {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      marginTop: 20,
      textAlign: 'center'
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
      <StatusBar animated={true} backgroundColor={colors.background} barStyle="dark-content" />
      <CirclesSvg style={styles.svgBackground} />
      <View>
        <Text style={styles.title}>Welcome, User. </Text>
        <HomeEcoScore point="1234" />
        <BlackButton onPress={() => navigation.navigate('Scan')} icon={{ name: 'barcode-outline', color: '#fff' }}>
          Scan
        </BlackButton>
      </View>
      <HomeHistory />
    </View>
  );
}

