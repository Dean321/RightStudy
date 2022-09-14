import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class ChooseType extends Component {
  render() {
    return (
      <View>
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
        <TouchableOpacity
          style={{
            backgroundColor: '#55363E',
            width: 160,
            height: 80,
            borderRadius: 20,
            justifyContent: 'center',
            marginTop: 100,
            marginLeft: 90,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Click to write subjective questions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#55363E',
            width: 160,
            height: 80,
            borderRadius: 20,
            justifyContent: 'center',
            marginTop: 50,
            marginLeft: 90,
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Click to write objective questions
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const st = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'DynaPuff',
  },
});
