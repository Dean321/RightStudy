import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Login extends Component {
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
        <TouchableOpacity style={[s.start, { marginTop: RFValue(100) }]}>
          <Text style={s.startt}>Enter your E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[s.start, { marginTop: RFValue(30) }]}>
          <Text style={s.startt}>Enter your Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[s.start, { marginTop: RFValue(30) }]}>
          <Text
            style={{
              color: '#55363E',
              fontWeight: 'bold',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  start: {
    backgroundColor: '#F5ABC9',
    height: RFValue(50),
    width: RFValue(150),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: RFValue(15),
  },
  startt: {
    marginTop: RFValue(14),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
