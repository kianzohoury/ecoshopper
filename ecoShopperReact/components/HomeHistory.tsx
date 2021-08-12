import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const histories = [
  { name: 'Tide Laundry Liquid Detergent', date: '08-05-2021', pointAdded: 1 },
  { name: 'Tide Laundry Liquid Detergent1', date: '08-05-2021', pointAdded: 1 },
  { name: 'Tide Laundry Liquid Detergent2', date: '08-05-2021', pointAdded: 1 },
  { name: 'Tide Laundry Liquid Detergent3', date: '08-05-2021', pointAdded: 1 },
  { name: 'Tide Laundry Liquid Detergent4', date: '08-05-2021', pointAdded: 1 }
]

export function HomeHistory() {
  return <View style={styles.main}>
    <View style={styles.bar}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>History</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>View All </Text>
        <Text style={{ color: 'white', fontWeight: '800', fontSize: 20, marginBottom: 4 }}>{'>'}</Text>
      </View>
    </View>
    {histories.map(hist =>
      <View key={hist.name} style={styles.histContainer}>
        <View>
          <Text style={{ fontWeight: '600' }}>{hist.name}</Text>
          <Text style={{ fontWeight: '600', color: '#00000077' }}>{hist.date}</Text>
        </View>
        <Text style={{ fontWeight: '600' }}>+{hist.pointAdded} pts</Text>
      </View>
    )}
  </View>
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    paddingVertical: 20
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: '#FDA829'
  },
  histContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 24
  }
})
