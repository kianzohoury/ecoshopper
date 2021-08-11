import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
  tile: {
    flexDirection: 'column-reverse',
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    height: 0.4 * vw,
    width: 0.4 * vw,
    borderRadius: 4,
    margin: 10,
  },
  tileText: {
    paddingBottom: 10,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flexWrap: "wrap",
  },
  rowContainer: {
    flexWrap: "wrap",
    flexDirection: "row"
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50
  }
});

export function HomeButtons() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.rowContainer}>
        <View style={styles.tile}>
          <Text style={styles.tileText}>
            Search
          </Text>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../assets/images/search.svg')} />
          </View>
        </View>

        <View style={styles.tile}>
          <Text style={styles.tileText}>
            Scan
          </Text>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../assets/images/scan.svg')} />
          </View>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.tile}>
          <Text style={styles.tileText}>
            News
          </Text>
          <View style={styles.iconContainer}>
            <Image style={{ width: 45, height: 40 }} source={require('../assets/images/news.svg')} />
          </View>
        </View>

        <View style={styles.tile}>
          <Text style={styles.tileText}>
            Upcycle
          </Text>
          <View style={styles.iconContainer}>
            <Image style={{ width: 35, height: 50 }} source={require('../assets/images/upcycle.svg')} />
          </View>
        </View>
      </View>
    </View>
  );
}
