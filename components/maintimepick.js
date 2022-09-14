import React, { Component, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import TimePicker from 'react-native-simple-time-picker';
import {
  useRingerMode,
  RINGER_MODE,
  checkDndAccess,
  requestDndAccess,
} from 'react-native-ringer-mode';
import { RFValue } from 'react-native-responsive-fontsize';

//const { mode, error, setMode } = useRingerMode();

export default class TimePick extends Component {
  constructor() {
    super();
    this.state = {
      shrs: 0,
      ehrs: 0,
      smin: 0,
      emin: 0,
      chrs: 0,
      cmin: 0,
      mode: '',
    };
  }

  async getPer() {
    const flag = await checkDndAccess();
    if (flag == false) {
      requestDndAccess();
    }
  }
  check() {
    console.log(10);
    if (this.state.shrs && this.state.ehrs) {
      //alert("true")
      var s = [this.state.shrs, this.state.smin];
      var e = [this.state.ehrs, this.state.emin];
      var c = [this.state.chrs, this.state.cmin];
      if (/*s[0] >= c[0]  Subtract dates*/ s) {
        //Today alarm
        console.log('today');
        if (c[0] >= s[0] && c[0] <= e[0]) {
          //set mode to silent

          console.log('silent');
        } else {
          //set mode to normal
          console.log('normal');
        }
      } else {
        //Tommorrow alarm
        console.log('tomorrow');
      }
    } else {
      alert('Choose time for start and end');
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        chrs: new Date().getHours(),
        cmin: new Date().getMinutes(),
      });
    }, 1000);
    this.getPer();
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
        <Text>
          c={this.state.chrs}:{this.state.cmin}
        </Text>
        <Text>
          start-{this.state.shrs}:{this.state.smin}
        </Text>
        <TimePicker
          selectedHours={this.state.shrs}
          selectedMinutes={this.state.smin}
          onChange={(h, m) => {
            //sethrs(h);setmin(m)
            this.setState({
              shrs: h,
              smin: m,
            });
          }}
          style={{ borderRadius: RFValue(100) }}
        />
        <Text>
          end-{this.state.ehrs}:{this.state.emin}
        </Text>
        <TimePicker
          selectedHours={this.state.ehrs}
          selectedMinutes={this.state.emin}
          onChange={(h, m) => {
            this.setState({
              ehrs: h,
              emin: m,
            });
          }}
          style={{ borderRadius: RFValue(100) }}
        />
        <TouchableOpacity
          style={{
            height: RFValue(30),
            width: RFValue(100),
            backgroundColor: 'grey',
          }}
          onPress={() => {
            this.check();
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  start: {
    backgroundColor: '#32E0C4',
    height: 50,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
  },
  startt: {
    marginTop: 14,
    fontWeight: 'bold',
    color: '#EEEEEE',
  },
});

/*width:330,height:400 backgroundColor: '#F5ABC9',(for start)
 */
