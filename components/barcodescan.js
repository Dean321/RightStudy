import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { RFValue } from 'react-native-responsive-fontsize';
//Permissions.askAsync(Permissions.CAMERA),.requestPermissionsAsync

export default class BarCodeScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: 'normal',
      hasCameraPermissions: null,
      scanned: false,
    };
  }
  getCameraPermissions = async () => {
    const { status } = await Camera();

    this.setState({
      hasCameraPermissions: status === 'granted',
      domState: 'scanner',
      scanned: false,
    });
  };
  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({
      domState: 'normal',
      scanned: true,
    });
  };
  render() {
    if (this.state.domState !== 'normal') {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    }
    return (
      <View >
        <Image
          source={require('../assets/logo.png')}
          style={{
            alignSelf: 'center',
            height: RFValue(200),
            width: RFValue(200),
            resizeMode: 'contain',
            marginTop: RFValue(30),
          }}
        />
      <TouchableOpacity
              style={styles.scanbutton}

              onPress={() => this.getCameraPermissions()}

            >
              <Text style={styles.scanbuttonText}>Scan</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: RFValue(1),
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: RFValue(24),
    fontSize: RFValue(18),
    fontWeight: 'bold',
    textAlign: 'center',
  }, scanbuttonText: {
    fontSize: 24,
    color: "#4C5D70",
  },
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#FBE5C0",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
});
