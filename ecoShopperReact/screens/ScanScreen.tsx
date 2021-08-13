import * as React from 'react';
import { Dimensions, StyleSheet, Text, View, Pressable, StatusBar } from 'react-native';
import { useTheme, StackActions } from '@react-navigation/native';
import { BarCodeScanningResult, Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default function ScanScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const [hasPermission, setHasPermission] = React.useState<Boolean | null>(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [flash, setFlash] = React.useState(Camera.Constants.FlashMode.off);
  const windowWidth = Dimensions.get('window').width;

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background
    },
    camera: {
      height: windowWidth * 4 / 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    barcodeBox: {
      width: '70%',
      height: windowWidth * 0.7,
      borderColor: colors.background,
      borderWidth: 3,
      borderStyle: 'dotted',
      borderRadius: 5
    },
    bottomContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      margin: 10,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5,
    },
    text: {
      color: 'black',
      fontSize: 20
    }
  });

  const barcodeHandler = (result: BarCodeScanningResult) => {
    console.log(`type: ${result.type}, data: ${result.data}`);
    navigation.navigate('Loading');

    // Promise.resolve({
    //   "upc": "07811403",
    //   "object": "Canada Dry Ginger Ale, 12 ounce can - Rips 2 Go",
    //   "recyclable": true,
    //   "img_link": "https://cdn11.bigcommerce.com/s-ya2jfekefv/images/stencil/760x760/products/607/824/68d6d76263cff2daff0c6e8bce56c16e7240d100__63014.1589656790.jpg?c=1",
    //   "reusable": false,
    //   "eco_score": 5,
    //   "alternatives": ""
    // })
    const mockData = new Promise(resolve => setTimeout(resolve, 1500, {
      "upc": "07811403",
      "object": "Canada Dry Ginger Ale, 12 ounce can - Rips 2 Go",
      "recyclable": true,
      "img_link": "https://cdn11.bigcommerce.com/s-ya2jfekefv/images/stencil/760x760/products/607/824/68d6d76263cff2daff0c6e8bce56c16e7240d100__63014.1589656790.jpg?c=1",
      "reusable": false,
      "eco_score": 5,
      "alternatives": ""
    }));
    const getResult = (code: any) => mockData
      // fetch(`http://e1c925f9a2ba.ngrok.io/ecoshopper/barcode/${code}`)
      //   .then(resp => resp.json())
      .then(json => {
        console.log(json);
        navigation.dispatch(StackActions.pop(2));
        navigation.navigate('FoundScreen', {
          screen: 'Overview',
          params: json
        });
        // alert(`from api: ${json.upc}, ${json.object}`)
      })
      .catch(err => {
        console.error(err);
        navigation.navigate('NotFoundScreen');
      })
    getResult(result.data);
  }

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.background} barStyle="dark-content" />
      {hasPermission
        ? <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          onBarCodeScanned={barcodeHandler}
        >
          <View style={styles.barcodeBox}></View>
        </Camera>
        : <View style={styles.camera}></View>
      }
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Use Camera to Scan Code</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
            style={({ pressed }) => [{
              backgroundColor: pressed ? 'transparent' : 'black'
            }, styles.button]}
          >
            {/* <Text style={styles.text}>Flip</Text> */}
            {/* <Ionicons name="camera-reverse" color="#fff" size={32} /> */}
            {({ pressed }) => <Ionicons name="camera-reverse" color={pressed ? 'black' : 'white'} size={32} />}
          </Pressable>
          <Pressable
            onPress={() => {
              console.log(`Flash button fired, flash: ${flash}`);
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.torch
                  : Camera.Constants.FlashMode.off
              );
            }}
            style={({ pressed }) => [{
              backgroundColor: pressed ? 'transparent' : 'black'
            }, styles.button]}
          >
            {/* <Text style={styles.text}>Flash</Text> */}
            {({ pressed }) => <Ionicons name="flash" color={pressed ? 'black' : 'white'} size={32} />}
          </Pressable>
        </View>
      </View>
    </View>
  );
}
