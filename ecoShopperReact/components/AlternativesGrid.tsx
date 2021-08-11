import * as React from 'react';
import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import {
  useFonts,
  SourceSansPro,
} from '@expo-google-fonts/inter';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const tileSize = screenWidth / numColumns;

const picsumImages = new Array(11).fill("http://placeimg.com/640/360/nature");

function renderItem({ item }) {
  return <Image source={{ uri: item }} style={{ height: tileSize, width: tileSize }} />;
}

export default function App() {
  const [images, setImages] = React.useState(picsumImages);
  return (
    <View style={{backgroundColor:"#fdd329"}}>
      <View style={{ flex:1, justifyContent: "center", marginLeft: "1em", }}>
        <h2 style={{fontFamily: "Inter_900Black"}}> Alternatives</h2>
      </View>
      <View style={{ flex: 20, }}>
        <FlatList  
          style={{margin:4}}
          columnWrapperStyle={{justifyContent:'space-between'}}
          data={images} 
          renderItem={renderItem} 
          numColumns={2}  
        />
      </View>
    </View>
  );
}

