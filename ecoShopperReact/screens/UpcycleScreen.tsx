import * as React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MasonryList from '@react-native-seoul/masonry-list';

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
      marginTop: 20,
      fontSize: 30,
      fontWeight: 'bold',
    },
  });


  return (
    // consider make the view masonry
    <FlatList
      ListHeaderComponent={<Text style={styles.title}>Upcycle Ideas</Text>}
      data={upcycleData}
      renderItem={({ item }) => <NewsPreview date="" picUrl={item.imgUrl} title={item.title} />}
      keyExtractor={item => item.title}
    />
  );
}

