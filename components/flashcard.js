import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Flashcard extends Component {
  render() {
    return (
      <View>
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
  },
});
