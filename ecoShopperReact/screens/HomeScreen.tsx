import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, ImageBackground, StatusBar, Dimensions } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { HomeEcoScore } from '../components/HomeEcoScore';
import { HomeButtons } from '../components/HomeButtons';
import { HomeHistory } from '../components/HomeHistory';
import CirclesSvg from '../assets/images/CirclesSvg';

export default function HomeScreen({ navigation, route }: { navigation: any, route: any }) {
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
      fontSize: 30,
      paddingTop: 14,
      fontWeight: 'bold',
      marginTop: 40,
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
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.background} barStyle="dark-content" />
      <CirclesSvg style={styles.svgBackground} />
      <View>
        <Text style={styles.title}>Welcome, {route.params?.user}. </Text>
        <HomeEcoScore point={route.params?.score} />
        <BlackButton onPress={() => navigation.navigate('Scan')} icon={{ name: 'barcode-outline', color: '#fff' }}>
          Scan
        </BlackButton>
      </View>
      <HomeHistory navigation={navigation} />
    </SafeAreaView>
  );
}
