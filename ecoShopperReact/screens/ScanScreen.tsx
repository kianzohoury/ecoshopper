import * as React from 'react';
import { Dimensions, StyleSheet, Text, View, Pressable } from 'react-native';
import { useTheme } from '@react-navigation/native';
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
<<<<<<< HEAD
    navigation.navigate('Loading');
=======
    alert(`type: ${result.type}, data: ${result.data}`);
>>>>>>> 82faae61a6f836aa3ec9b353b1ef84fa2f166129

    const getResult = (code: any) => fetch(`http://localhost:8000/ecoshopper/barcode/${code}`)
      .then(resp => resp.json())
      .then(json => {
<<<<<<< HEAD
        console.log(resp);
        alert(`${json.upc}, ${json.object}`);
=======
        console.log(json);
        alert(`from api: ${json.upc}, ${json.object}`)
>>>>>>> 82faae61a6f836aa3ec9b353b1ef84fa2f166129
      })
      .catch(err => console.error(err))
    getResult(result.data);
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        flashMode={flash}
        onBarCodeScanned={barcodeHandler}
      >
        <View style={styles.barcodeBox}></View>
      </Camera>
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
