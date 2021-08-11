import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// import { View } from '../components/Themed';

export default function CreateLoadingPage() {
  // const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: "center"
    },
    title: {
      fontSize: 20,
      // fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
    return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000000"/>
      <Text style={styles.title}>Loading...</Text>
    </View>
    );
}
