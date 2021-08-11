import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function HomeEcoScore({ point }: { point: string }) {
  return <View>
    <Text style={styles.title}>Your Eco Score</Text>
    <View style={styles.pointContainer}>
      <Text style={styles.point}>{point}</Text>
      <Text style={styles.pts}>pts</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 50,
    fontWeight: '600',
    textAlign: 'center'
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 50
  },
  point: {
    fontSize: 72,
    fontWeight: '600',
    fontStyle: 'italic'
  },
  pts: {
    marginBottom: 12,
    fontWeight: '600'
  }
})
