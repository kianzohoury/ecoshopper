import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useTheme, NavigationContainer } from '@react-navigation/native';

import NewsPreview from '../components/NewsPreview';
import news from '../assets/jsons/news.json'

export default function NewsScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'flex-start',
      backgroundColor: colors.background
    }
  });


  return (
    <ScrollView style={styles.container}>
      {news.map(n => <NewsPreview title={n.title} date={n.date} picUrl={n.pic} />)
      }
    </ScrollView>
  );
}

