import React, { Component, useState } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import TimePicker from 'react-native-simple-time-picker';

export default function PractiseTimePick() {
  const [hrs, sethrs] = useState(0);
  const [min, setmin] = useState(0);
  return (
    <View>
      <View>
        <Image
          source={require('../assets/logo.png')}
          style={{
            alignSelf: 'center',
            height: 200,
            width: 200,
            resizeMode: 'contain',
            marginTop: 50,
          }}
        />
      </View>
      <Text>
        {hrs}:{min}
      </Text>
      <TimePicker
        selectedHours={hrs}
        selectedMinutes={min}
        onChange={(h, m) => {
          sethrs(h);
          setmin(m);
        }}
        style={{ borderRadius: 100 }}
      />
      <TimePicker
        selectedHours={hrs}
        selectedMinutes={min}
        onChange={(h, m) => {
          sethrs(h);
          setmin(m);
        }}
        style={{ borderRadius: 100 }}
      />
    </View>
  );
}

/*width:330,height:400 backgroundColor: '#F5ABC9',(for start)*/
