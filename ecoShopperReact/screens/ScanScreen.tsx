import * as React from 'react';
import { Dimensions, StyleSheet, Text, View, Pressable, StatusBar } from 'react-native';
import { useTheme, StackActions } from '@react-navigation/native';
import { BarCodeScanningResult, Camera } from 'expo-camera';

export default function ScanScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const [hasPermission, setHasPermission] = React.useState<Boolean | null>(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [flash, setFlash] = React.useState(Camera.Constants.FlashMode.off)
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
      height: 50,
      paddingHorizontal: 30,
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5
    },
    text: {
      color: 'black',
      fontSize: 20
    }
  });

  const barcodeHandler = (result: BarCodeScanningResult) => {
    console.log(`type: ${result.type}, data: ${result.data}`);
    navigation.navigate('Loading');

    const getResult = (code: any) =>
      // Promise.resolve({
      //   "eco score": 80,
      //   "object": "Crayola Colored Pencils",
      //   "recyclable": false,
      //   "reusable": true,
      //   "upc": 71662040246
      // })
      fetch(`http://04a5ebc15b16.ngrok.io/ecoshopper/barcode/${code}`)
        .then(resp => resp.json())
        .then(json => {
          console.log(json);
          navigation.dispatch(StackActions.pop(2));
          navigation.navigate('FoundScreen', json);
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
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}>Flip</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              console.log(`Flash button fired, flash: ${flash}`);
              setFlash(
                flash === Camera.Constants.FlashMode.off
                  ? Camera.Constants.FlashMode.torch
                  : Camera.Constants.FlashMode.off
              );
            }}>
            <Text style={styles.text}>Flash</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
