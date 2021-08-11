import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
  newsTile: {
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    height: 150,
    width: 0.9 * vw,
    borderRadius: 4
  },

  newsTitle: {
    padding: 10,
    position: "absolute",
    top: 0,
    fontWeight: 'bold',
  },

  newsDate: {
    padding: 10,
    position: "absolute",
    bottom: 0,
  }
});

export function NewsPreview() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.newsTile}>
        <Text style={styles.newsTitle}>
          Five things we have learned from the IPCC report
        </Text>
        <Text style={styles.newsDate}>
          August 7th, 2021
        </Text>
      </View>
    </View>
  );
}
