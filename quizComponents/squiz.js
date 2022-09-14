import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class OQuiz extends Component {
  constructor() {
    super();
    this.state = { icon: 'add-circle', color: 'grey', ques: '', ans: '' };
  }
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
        <Text>Write your first question here</Text>
        <TextInput
          style={{
            height: RFValue(25),
            width: RFValue(300),
            backgroundColor: 'white',
          }}
          placeholder="Question here"
          placeholderTextColor="black"
        />
        <TextInput
          style={{
            height: RFValue(25),
            width: RFValue(300),
            backgroundColor: 'white',
          }}
          placeholder="Answer here"
          placeholderTextColor="black"
        />
        <TouchableOpacity
          style={{
            height: RFValue(50),
            width: RFValue(90),
            backgroundColor: 'white',
            marginTop: 80,
          }} onPress={(a)=>{
            this.setState({a:ques})
          }}>
          <Ionicons
          name={this.state.icon}
          size={RFValue(40)}
          color={this.state.color}
          style={{ marginLeft: 40 }}
        />
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
  },
});
