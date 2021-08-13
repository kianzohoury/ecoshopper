import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import upcycleData from '../assets/jsons/cola_upcycle.json'
import NewsPreview from '../components/NewsPreview';

export default function UpcycleScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background
    },
    title: {
      margin: 10,
      paddingTop: 0,
      fontSize: 30,
      fontWeight: 'bold',
      justifyContent: 'center',
      textAlign: 'center'
    },
  });


  return (
    // consider make the view masonry
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Upcycling Ideas</Text>
      <FlatList
        data={upcycleData}
        renderItem={({ item }) => <NewsPreview date="" picUrl={item.imgUrl} title={item.title} />}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}
