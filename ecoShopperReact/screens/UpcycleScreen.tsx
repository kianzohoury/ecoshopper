import * as React from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MasonryList from '@react-native-seoul/masonry-list';

import upcycleData from '../assets/jsons/cola_upcycle.json'
import NewsPreview from '../components/NewsPreview';
import { Appbar } from 'react-native-paper';

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
    <SafeAreaView>
      <Appbar.Header statusBarHeight={8} style={{ backgroundColor: colors.background }}>
        <Appbar.Content title="Upcycle Ideas" />
      </Appbar.Header>
      <FlatList
        data={upcycleData}
        renderItem={({ item }) => <NewsPreview date="" picUrl={item.imgUrl} title={item.title} />}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}
