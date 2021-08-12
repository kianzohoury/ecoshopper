import * as React from 'react';
import { SafeAreaView, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { BlackButtonBorder } from '../components/BlackButtonBorder';
import { View } from '../components/Themed';

export default function CreateLocationScreen({ navigation }: { navigation: any }) {
  const [text, onChangeText] = React.useState('');
  const { colors } = useTheme();

  const DATA = [];

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Recycle Location ${index+1}`
  });

  const getItemCount = (data) => 10;

  const Item = ({ title }) => (
    <View style={styles.item}>
      <View style={styles.boxLocation}></View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      marginVertical: 80,
      justifyContent: 'center'
    },
    item: {
      backgroundColor: 'white',
      flexDirection: 'row',
      height: 200,
      justifyContent: 'space-between',
      marginVertical: 0,
      marginHorizontal: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingHorizontal: 0,
      paddingVertical: 0
    },
    title: {
      position: 'absolute',
      paddingTop: 10,
      right: 22,
      fontSize: 16,
      fontWeight: "bold"
    },
    titleBar: {
      textAlign: 'center',
      fontWeight: "bold",
      marginTop: -20,
      paddingBottom: 20,
      fontSize: 20,
    },

    boxLocation: {
      width: '50%',
      height: '95%',
      backgroundColor: 'orange',
    }
  });


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleBar}>Overview | Recycle | Upcycle</Text>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}

      />

    </SafeAreaView>
  );
}
