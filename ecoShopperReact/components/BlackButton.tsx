import * as React from 'react';
import { Text, Pressable } from 'react-native';

export function BlackButton({ text, onPress, bordered = false }:
  { bordered?: boolean, text: string, onPress: () => any }) {
  return <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor: bordered ? (pressed ? 'white' : 'transparent') : (pressed ? 'transparent' : 'black'),
        paddingVertical: 15,
        paddingHorizontal: 60,
        maxWidth: '100%',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 5,
      }
    ]}
  >
    {({ pressed }) => (
      <Text style={{
        color: bordered ? 'black' : pressed ? 'black' : 'white',
        fontWeight: '600',
        fontSize: 20
      }}>{text}</Text>
    )}

  </Pressable>
}

