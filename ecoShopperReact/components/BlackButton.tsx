import * as React from 'react';
import { Text, Pressable, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function BlackButton({ children, onPress, bordered = false, icon = null }:
  { children: any, onPress: () => any, bordered?: boolean, icon?: any }) {
  return <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor: bordered ? (pressed ? 'white' : 'transparent') : (pressed ? 'transparent' : 'black'),
        paddingVertical: icon ? 8 : 15,
        paddingHorizontal: 60,
        maxWidth: '100%',
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center'
      }
    ]}
  >
    {({ pressed }) => (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <Text style={{
          color: bordered ? 'black' : pressed ? 'black' : 'white',
          fontWeight: '800',
          fontSize: 20,
          marginRight: 10,
        }}>{children}</Text>
        {icon &&
          <Ionicons name={icon.name} color={icon.color} size={40} />
        }
      </View>
    )}

  </Pressable>
}
