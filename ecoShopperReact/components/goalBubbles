import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Div, ThemeProvider, Text, Button, Input, Icon, Image } from 'react-native-magnus';
import Constants from 'expo-constants';


export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor:"#fdd329"}}>
          <Div row style={{marginTop:20, marginLeft:40}}>
            <Button bg="red500" h={150} w={150} rounded="circle">
              <h5 style={{ color: 'Black', fontFamily: "SourceSansPro"}}>Become an Econaut</h5>
            </Button>
            <Button bg="yellow600" h={130} w={130} rounded="circle" ml="md">
              <h3 style={{ color: 'Black', fontFamily: "SourceSansPro" }}>Less Plastic</h3>
            </Button>
          </Div>
          <Div row style={{margin:20}}>
            <Button bg="red100" h={130} w={130} rounded="circle" ml="md">
              <h3 style={{ color: 'Black' }}>Recycle</h3>
            </Button>
            <Button bg="yellow200" h={110} w={110} rounded="circle" ml="md">
              <h6 style={{ color: 'Black', fontFamily: "SourceSansPro" }}>
                  Reduce Footprint
              </h6>
            </Button>
          </Div>
          <Div row style={{marginLeft:60}}>
            <Button bg="red200" h={80} w={80} rounded="circle" ml="md">
              <h3 style={{ color: 'Black', fontFamily: "SourceSansPro" }}>Reuse</h3>
            </Button>
            <Button bg="yellow600" h={120} w={120} rounded="circle" ml="md">
              <h5 style={{ color: 'Black', fontFamily: "SourceSansPro" }}>Build Habits</h5>
            </Button>
          </Div>
        </SafeAreaView> 
      </ThemeProvider>
    );
  }
}

