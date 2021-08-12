import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  },
  newsTile: {
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    height: 150,
    width: 0.95 * vw,
    borderRadius: 10,
    shadowRadius: 10
  },
  newsTitle: {
    padding: 10,
    position: "absolute",
    top: 0,
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
    textShadowColor: "#000",
    textShadowRadius: 10
  },

  newsDate: {
    padding: 10,
    position: "absolute",
    bottom: 0,
    color: "#fff",
    textShadowColor: "#000",
    textShadowRadius: 10
  }
});

export default function NewsPreview({ title, date, picUrl }:
  { title: string, date: string, picUrl: string }) {
  return (
    <View style={styles.main}>
      <View style={styles.newsTile}>
        <ImageBackground style={styles.newsTile} imageStyle={{ borderRadius: 10 }} source={{ uri: picUrl }}>
          <Text style={styles.newsTitle}>
            {title}
          </Text>
          <Text style={styles.newsDate}>
            {date}
          </Text>
        </ImageBackground>
      </View>
    </View>
  );
}
