import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

import { BlackButton } from '../components/BlackButton';
import { View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <BlackButton onPress={onPressAction} text='Next >' bordered={true} />
    </View>
  );
}

const onPressAction = () => {
  window.alert('this is an alert');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDD329'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
