import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

const styles = StyleSheet.create({
  tile: {
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    height: 0.3 * vw,    
    width: 0.3 * vw,
    borderRadius: 4,
    margin: 10,
  },

  tileText: {
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  
  container: {
    flexWrap: "wrap",
  },

  icon: {
    justifyContent: "center",
    alignItems: "center",
  }
});

export function homeButtons() {
  return (
    <View style={{justifyContent: "center", alignItems: "center" }}>
      <View style={[styles.container, {flexDirection: "row"}]}>
        <View style = {styles.tile}>
          <Text style = {styles.tileText}>
            Search
          </Text>
          <View style = {styles.icon}>
            <Image source = {require('./search.svg')} style = {styles.icon}/>
          </View>
        </View>
        
        <View style = {styles.tile}>
          <Text style = {styles.tileText}>
            Scan
          </Text>
          <View style = {styles.icon}>
            <Image source = {require('./scan.svg')} style = {styles.icon}/>
          </View>
        </View>
      </View>

      <View style={[styles.container, {flexDirection: "row"}]}>
        <View style = {styles.tile}>
          <Text style = {styles.tileText}>
            News
          </Text>
          <View style = {styles.icon}>
            <Image source = {require('./news.svg')} style = {styles.icon}/>
          </View>
        </View>

        <View style = {styles.tile}>
          <Text style = {styles.tileText}>
            Upcycle
          </Text>
          <View style = {styles.icon}>
            <Image source = {require('./upcycle.svg')} style = {styles.icon}/>
          </View>
        </View>
      </View>
    </View>
  );
}
