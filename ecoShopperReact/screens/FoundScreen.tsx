import * as React from 'react';
import { StyleSheet, Text, FlatList, View, Image, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { List, Colors } from 'react-native-paper';

import locationData from '../assets/jsons/recycling_locations.json'
import upcycleData from '../assets/jsons/cola_upcycle.json'
import altData from '../assets/jsons/cola_alternatives.json'
import NewsPreview from '../components/NewsPreview';

const ALTERNATIVE_ENABLED = true;
const Tab = createMaterialTopTabNavigator();

function OverviewView({ route }: { route: any }) {
  return (
    <ScrollView>
      <View style={styles.rect}>
        <View style={{ alignItems: "center" }}>
          {route.params?.img_link
            ? <Image style={styles.ellipse} source={{ uri: route.params?.img_link }} />
            : <View style={styles.ellipse}>
              <Ionicons name="camera" color="#000" size={32} />
            </View>
          }
          <Text style={styles.subTitleText}>{route.params?.object}</Text>
        </View>

        <View>
          <View style={styles.container}>
            <Text style={styles.titleText}>Recycle</Text>
            {route.params?.recyclable
              ? <Ionicons name="checkmark-circle" color="green" size={32} />
              : <Ionicons name="close-circle" color="red" size={32} />
            }
          </View>
          <View style={styles.container}>
            <Text style={styles.titleText}>Reusable</Text>
            {route.params?.reusable
              ? <Ionicons name="checkmark-circle" color="green" size={32} />
              : <Ionicons name="close-circle" color="red" size={32} />
            }
          </View>

          <View style={styles.container}>
            <Text style={styles.titleText}>Eco Score</Text>
            <Text style={{ fontSize: 24, color: "#70B241", fontWeight: "bold", marginRight: 10 }}>
              {route.params?.eco_score}
            </Text>
          </View>
        </View>
      </View>

      {ALTERNATIVE_ENABLED &&
        <View>
          <View style={{ marginBottom: 20, marginLeft: 20, marginTop: 40 }}>
            <Text style={styles.titleText}>Alternatives</Text>
          </View>
          <View style={styles.alternatives}>
            {altData.map(alt => <View key={alt.name} >
              <Text style={{ textAlign: 'center', marginTop: 5 }}>{alt.name}</Text>
              <Image style={styles.box} source={{ uri: alt.imgUrl }} />
            </View>
            )}
          </View>
        </View>
      }
    </ScrollView>)
}

function RecycleView() {
  return (
    <FlatList
      data={locationData}
      renderItem={({ item }) => (
        <List.Item
          title={item.locationName}
          description={`${item.distance} mi` + '\n' + item.address}
          left={props =>
            <Ionicons style={{ marginTop: 10 }}
              name="location" color={Colors.red500} size={32} />
          }
        />
      )}
      keyExtractor={item => item.locationName}
    />
  )
}

function UpcycleView() {
  return (
    <FlatList
      data={upcycleData}
      renderItem={({ item }) => <NewsPreview date="" picUrl={item.imgUrl} title={item.title} />}
      keyExtractor={item => item.title}
    />
  )
}

export default function FoundScreen({ route, navigation }: { route: any, navigation: any }) {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' },
        tabBarIndicatorStyle: { backgroundColor: 'orange' },
        tabBarBounces: true,
        tabBarStyle: { paddingTop: 10, backgroundColor: colors.background },
      }}
    >
      <Tab.Screen name="Overview" component={OverviewView} />
      <Tab.Screen name="Recycle" component={RecycleView} />
      <Tab.Screen name="Upcycle" component={UpcycleView} />
    </Tab.Navigator>
  )

  // return (
  //   <ScrollView style={styles.window}>
  //     <View style={styles.row}>
  //       <Text style={styles.titleText}>
  //         Overview
  //       </Text>
  //       <Text style={styles.titleText}>
  //         Recycle
  //       </Text>
  //       <Text style={styles.titleText}>
  //         Upcycle
  //       </Text>
  //     </View>

  //     <OverviewView route={route} />

  //   </ScrollView>

  // );
}

const styles = StyleSheet.create({
  titleText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: 30,
    textAlign: 'left'
  },
  subTitleText: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 13,
    lineHeight: 30,
    textAlign: 'left'
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: "space-around"
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(253, 168, 41, 0.5);",
    borderRadius: 5,
    marginVertical: 2,
    marginHorizontal: 15
  },
  window: {
    backgroundColor: "#FDD329",
  },
  rect: {
    flexDirection: "column",
  },
  ellipse: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 146,
    height: 146,
    marginTop: 20,
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  alternatives: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    marginHorizontal: 50,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between"
  },
  recycleItem: {
    flexDirection: 'row',
    height: 200,
    justifyContent: 'space-between',
    marginVertical: 0,
    marginHorizontal: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    paddingVertical: 0
  },
  recycleBoxLocation: {
    width: '50%',
    height: '95%',
    backgroundColor: 'orange',
  },
  recycleTitle: {
    position: 'absolute',
    paddingTop: 10,
    right: 22,
    fontSize: 16,
    fontWeight: "bold"
  },
});