import * as React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import NewsPreview from '../components/NewsPreview';
import news from '../assets/jsons/news.json'

export default function NewsScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
    },
    title: {
      margin: 10,
      marginTop: 20,
      fontSize: 30,
      fontWeight: 'bold',
    },
  });


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Environment News</Text>
      {news.map(n => <NewsPreview key={n.title} title={n.title} date={n.date} picUrl={n.pic} />)
      }
    </ScrollView>
  );
}

