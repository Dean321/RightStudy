import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Indicating extends Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
    };
  }
  async loadFonts() {
    await Font.loadAsync({
      DynaPuff: require('../assets/DynaPuff-VariableFont_wdth,wght.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }
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
        <View style={{ marginTop: RFValue(70) }}>
          <Text style={st.text}>Hi!!</Text>
          <Text style={st.text}>
            If you are new here, I want to give you an instruction about how to
            use app. On the top, you will see three lines. You have to click
            that and you will be able to access everything from notes making to
            to-do list.{' '}
          </Text>
          <Text style={st.text}>
            Hope you have a good day and good studies ahead!
          </Text>
          <Text style={st.text}>From your cute full-stack developer</Text>
        </View>
      </View>
    );
  }
}

const st = StyleSheet.create({
  text: {
    margin: RFValue(10),
    fontSize: RFValue(18),
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'DynaPuff',
  },
});
