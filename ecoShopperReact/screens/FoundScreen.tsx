import * as React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function FoundScreen({ route, navigation }: { route: any, navigation: any }) {
  const { colors } = useTheme();
  const ALTERNATIVE_ENABLED = false;
  const styles = StyleSheet.create({
    titleText: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 19,
      lineHeight: 30,
      textAlign: 'left'
    },
    subTitleText: {
      fontStyle: 'normal',
      fontWeight: '800',
      fontSize: 13,
      lineHeight: 30,
      textAlign: 'left'
    },
    row: {
      flexDirection: "row",
      marginTop: 20,
      marginHorizontal: 10,
      justifyContent: "space-around"
    },
    box: {
      width: 144,
      height: 144,
      backgroundColor: "rgba(253, 168, 41, 0.5);",
      borderRadius: 5,
      margin: 2,
    },
    window: {
      backgroundColor: "#FDD329",
    },
    rect: {
      // background: "linear-gradient(180deg, rgba(255, 153, 0, 0.25) 0%, rgba(255, 255, 255, 0) 100%)",
      // width: "100%",
      // justifyContent: "center",
      flexDirection: "column",
      // alignItems: "stretch"
    },
    ellipse: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      // boxShadow: "0px 5px 50px rgba(0, 0, 0, 0.03)",
      width: 146,
      height: 146,
      marginTop: 20,
      borderRadius: 120,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 5
    },
    alternatives: {
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
    },
    container: {
      flexDirection: "row",
      marginHorizontal: 50,
      marginTop: 10,
      marginBottom: 10,
      justifyContent: "space-between"
    }
  });


  return (
    <ScrollView style={styles.window}>
      <View style={styles.row}>
        <Text style={styles.titleText}>
          Overview
        </Text>
        <Text style={styles.titleText}>
          Recycle
        </Text>
        <Text style={styles.titleText}>
          Upcycle
        </Text>
      </View>

      <View style={styles.rect}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.ellipse}>
            <Ionicons name="camera" color="#000" size={32} />
          </View>
          <Text style={styles.subTitleText}>{route.params?.object}</Text>
        </View>

        <View>
          <View style={styles.container}>
            <Text style={styles.titleText}>Recycle</Text>
            {route.params?.recyclable
              ? <Ionicons name="checkmark-circle" color="green" size={32} />
              : <Ionicons name="close-circle" color="red" size={32} />
            }
          </View>
          <View style={styles.container}>
            <Text style={styles.titleText}>Reusable</Text>
            {route.params?.reusable
              ? <Ionicons name="checkmark-circle" color="green" size={32} />
              : <Ionicons name="close-circle" color="red" size={32} />
            }
          </View>

          <View style={styles.container}>
            <Text style={styles.titleText}>Eco Score</Text>
            <Text style={{ fontSize: 24, color: "#70B241", fontWeight: "bold" }}>
              {route.params?.eco_score && 'A-'}
            </Text>
          </View>
        </View>
      </View>

      {ALTERNATIVE_ENABLED &&
        <View>
          <View style={{ marginBottom: 20, marginLeft: 20, marginTop: 40 }}>
            <Text style={styles.titleText}>Alternatives</Text>
          </View>
          <View style={styles.alternatives}>
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={styles.box} />
          </View>
        </View>
      }
    </ScrollView>
  );
}
