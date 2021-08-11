import * as React from 'react';
import { Text, Pressable } from 'react-native';

export function BlackButtonBorder({ text, onPress, bordered = false }:
  { bordered?: boolean, text: string, onPress: () => any }) {
  return <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor: (pressed ? 'black' : 'transparent'),
        paddingVertical: 15,
        paddingHorizontal: 60,
        maxWidth: '100%',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 5,
        paddingHorizontal: 100,
      }
    ]}
  >
    {({ pressed }) => (
      <Text style={{
        color: bordered ? 'black' : pressed ? 'white' : 'black',
        fontWeight: '600',
        fontSize: 20
      }}>{text}</Text>
    )}

  </Pressable>
}
