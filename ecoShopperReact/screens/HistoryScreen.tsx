import * as React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors } from 'react-native-paper';

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

export default function HistoryScreen({ navigation, route }: { navigation: any, route: any }) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.amber100,
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

  return (
    <ScrollView style={styles.container}>
      {histories.map(hist =>
        <View key={hist.item} style={styles.histContainer}>
          <View>
            <Text style={{ fontWeight: '600' }}>{hist.item}</Text>
            <Text style={{ fontWeight: '600', color: '#00000077' }}>{hist.date}</Text>
          </View>
          <Text style={{ fontWeight: '600' }}>+{hist.points} pts</Text>
        </View>
      )}
    </ScrollView>
  )
}