import * as React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';

const histories = [
  { "item": "Tide Laundry Liquid Detergent", "date": "12 August", "points": 5 },
  { "item": "Glad Kitchen Trash Bags", "date": "12 August", "points": 1 },
  { "item": "Up & Up Nitrile Gloves", "date": "12 August", "points": 1 },
  { "item": "Sensodyne Pronamel Toothpaste", "date": "12 August", "points": 4 },
  { "item": "Staples Paper Clips", "date": "31 July", "points": 4 },
  { "item": "Staples Copy Paper", "date": "31 July", "points": 5 },
  { "item": "Crayola Crayons", "date": "31 July", "points": 1 },
  { "item": "Mondo Llama Colored Pencils", "date": "31 July", "points": 4 },
  { "item": "Prima Watercolor Confections", "date": "31 July", "points": 2 },
  { "item": "Coca-Cola Classic Coke (12pk)", "date": "31 July", "points": 5 },
  { "item": "Canada Dry Ginger Ale (12pk)", "date": "31 July", "points": 5 }
]

export function HomeHistory({ navigation }: { navigation: any }) {
  return <View style={styles.main}>
    <View style={styles.bar}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>History</Text>
      <Pressable
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={() => navigation?.navigate('History')}>
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>View All </Text>
        <Text style={{ color: 'white', fontWeight: '800', fontSize: 20, marginBottom: 4 }}>{'>'}</Text>
      </Pressable>
    </View>
    <View style={styles.main}>
      {histories.map(hist =>
        <View key={hist.item} style={styles.histContainer}>
          <View>
            <Text style={{ fontWeight: '600' }}>{hist.item}</Text>
            <Text style={{ fontWeight: '600', color: '#00000077' }}>{hist.date}</Text>
          </View>
          <Text style={{ fontWeight: '600' }}>+{hist.points} pts</Text>
        </View>
      )}
    </View>
  </View>
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    paddingVertical: 20
  },
  bar: {
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 16,
    backgroundColor: '#FDA829'
  },
  histContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 24
  }
})
