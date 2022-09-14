import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity,TextInput} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CourseGallery extends Component {
  constructor(){
    super();
    this.state={
      title:"",content:"",colour:"",icon: 'add-circle',color: 'grey'
    }
  }

  render() {
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
        <TextInput />
       <TextInput
       style={{height: RFValue(35),
            width: RFValue(300),backgroundColor:"white"}} placeholder="title"
      /><TextInput
       style={{height: RFValue(40),
            width: RFValue(200),backgroundColor:"white"}} placeholder="title"
      />
<Ionicons
              name={this.state.icon}
              size={RFValue(40)}
              color={this.state.color}
              style={{marginLeft:40}}
              
            />
             
      </View>
    );
  }
}

/*
  const text=this.state.title;
<TouchableOpacity style={{backgroundColor:"white",width:200,height:50}} onPress={()=>{
         this.state.title
       }}>
        <Text>Write your title here!</Text>
       
        </TouchableOpacity>
        console.log(10);
        <TouchableOpacity style={{backgroundColor:"white",width:200,height:100}} >
        <Text>Write your course here!</Text>
        </TouchableOpacity>*/

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
})
