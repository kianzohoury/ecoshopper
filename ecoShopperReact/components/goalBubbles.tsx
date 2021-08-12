import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { Colors } from 'react-native-paper';
// import { View, ThemeProvider, Text, Pressable, Input, Icon, Image } from 'react-native-magnus';

const goals = [
  { text: 'Become an Econaut', color: Colors.red600, pressed: false },
  { text: 'Less Plastic', color: Colors.orange400, pressed: false },
  { text: 'Recycle', color: Colors.pink400, pressed: false },
  { text: 'Reduce Footprint', color: Colors.orange800, pressed: false },
  { text: 'Reuse', color: Colors.amber800, pressed: false },
  { text: 'Build Habits', color: Colors.pink600, pressed: false },
]

export default function GoalBubbles() {

  return (
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 80
    }}>
      {goals.map(g =>
        <Pressable key={g.text}
          style={({ pressed }) => [
            {
              backgroundColor: g.color,
              height: 120,
              width: 120,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: Colors.yellow100,
              borderWidth: pressed || g.pressed ? 5 : 0
            }
          ]}
          onPress={() => { g.pressed ? g.pressed = false : g.pressed = true; }}
        >
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{g.text}</Text>
        </Pressable>
      )}
    </View>
  )

  // style={{
  //   backgroundColor: g.color,
  //   height: 120,
  //   width: 120,
  //   borderRadius: 100,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }}>

  // return (
  //   <View>
  //     <SafeAreaView style={{ flex: 1, backgroundColor: "#fdd329" }}>
  //       <View style={{ marginTop: 20, marginLeft: 40 }}>
  //         <Pressable style={{ backgroundColor: Colors.red500, height: 150, width: 150, borderRadius: 100 }}>
  //           <Text style={{ color: '#000' }}>Become an Econaut</Text>
  //         </Pressable>
  //         <Pressable style={{ backgroundColor: Colors.orange200, height: 130, width: 130, borderRadius: 100 }}>
  //           <Text style={{ color: '#000' }}>Less Plastic</Text>
  //         </Pressable>
  //       </View>
  //       <View style={{ margin: 20 }}>
  //         <Pressable style={{ backgroundColor: Colors.red100, height: 130, width: 130, borderRadius: 100 }}>
  //           <Text style={{ color: '#000' }}>Recycle</Text>
  //         </Pressable>
  //         <Pressable style={{ backgroundColor: Colors.yellow800, height: 110, width: 110, borderRadius: 100 }}>
  //           <Text style={{ color: '#000' }}>
  //             Reduce Footprint
  //           </Text>
  //         </Pressable>
  //       </View>
  //       <View style={{ marginLeft: 60 }}>
  //         <Pressable style={{ backgroundColor: Colors.red200, height: 80, width: 80, borderRadius: 100 }}>
  //           <Text style={{ color: '#000' }}>Reuse</Text>
  //         </Pressable>
  //         <Pressable style={{ backgroundColor: Colors.yellow600, height: 120, width: 120, borderRadius: 100 }}>
  //           <Text style={{ color: '#000' }}>Build Habits</Text>
  //         </Pressable>
  //       </View>
  //     </SafeAreaView>
  //   </View>
  // );

}

