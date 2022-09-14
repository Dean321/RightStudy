import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Home extends Component {
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
        <TouchableOpacity
          style={[s.startb, { marginTop: RFValue(200) }]}
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}>
          <Text style={s.startt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[s.startb, { marginTop: RFValue(40) }]}>
          <Text style={s.startt}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  startb: {
    backgroundColor: '#FEAE53',
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

/*width:330,height:400 backgroundColor: '#F5ABC9',(for start)
,{marginTop: 30,},{marginTop: 90,}    marginTop: 100,*/
