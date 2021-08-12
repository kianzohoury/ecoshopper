import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Slider from '@react-native-community/slider'

import { BlackButton } from '../components/BlackButton';

function CustomSliderMarker() {
  return <View style={{ height: 40, width: 20 }}>
    <View style={{
      height: 40,
      width: 10,
      backgroundColor: Colors.orange900
    }}>
    </View>
  </View>
}

export default function CreateAccountPage2({ navigation, route }: { navigation: any, route: any }) {
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
      marginBottom: 40
    },
    sidebar: {
      fontSize: 30,
      marginBottom: 100,
    },
  });


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Describe your current level of recycling. </Text>
      {/* <Text style={styles.sidebar}>[Slidebar goes here]</Text> */}
      <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 20, marginVertical: 20 }}>
        <View style={{ flexDirection: 'row', width: 305, paddingRight: 5, justifyContent: 'space-between', marginBottom: -40 }}>
          {[...Array(9).keys()].map(n => (
            <View key={n} style={{ height: 30, width: 4, backgroundColor: Colors.amber700 }}>
            </View>))}
        </View>
        <MultiSlider
          sliderLength={300}
          min={1}
          max={9}
          step={1}
          values={[5]}
          selectedStyle={{ backgroundColor: Colors.orange900, height: 5, borderLeftColor: Colors.amber900 }}
          unselectedStyle={{ backgroundColor: Colors.amber700, height: 5 }}
          customMarker={CustomSliderMarker}
          snapped={true}
          allowOverlap={true}
        />
        <View style={{ width: 320, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>never</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>sometimes</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>often</Text>
        </View>
      </View>
      <BlackButton onPress={() => {
        console.log('CA2 page: ', route.params);
        navigation.navigate('CA3', { user: route.params?.user });
      }}>{'Next >'}</BlackButton>
    </View>
  );
}
