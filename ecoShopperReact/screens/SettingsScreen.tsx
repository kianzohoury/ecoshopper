import * as React from 'react';
import { SafeAreaView, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import { BlackButton } from '../components/BlackButton';
import { BlackButtonBorder } from '../components/BlackButtonBorder';
import { View } from '../components/Themed';

export default function SettingsScreen({ navigation }: { navigation: any }) {
  const [text, onChangeText] = React.useState('');
  const { colors } = useTheme();

  const DATA = [];

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    answer: `User Setting`,
    title: `Edit`,
  });

  const getItemCount = (data) => 12;

  const Item = ({ title, answer }) => (
    <View style={styles.item}>
      <Text style={styles.answer}>{answer}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      marginTop: 70,
      justifyContent: 'center',
      // marginBottom:
    },
    item: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      height: 60,
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
    answer: {
      position: 'absolute',
      paddingTop: 10,
      left: 22,
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
  });


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleBar}>Settings</Text>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item answer={item.answer} title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}
