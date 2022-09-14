import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from './components/home';
import Indicating from "./components/indicating";
import LogOut from "./components/logout";
import Dashboard from "./components/dashboard";
import DrawerNavigator from './components/drawer';
import Profile from "./components/profile";
import Login from './components/login';
import TimePick from "./components/maintimepick";
import BarCodeScan from "./components/barcodescan";
import Quiz from "./components/quiz";
import OQuiz from "./quizComponents/oquiz";
import SQuiz from "./quizComponents/squiz";
import Flashcard from './components/flashcard';
import CourseGallery from "./components/courseg";
import Calculator from "./components/calculator";
import Note from "./noteAreaCompoent/Note";
import ChooseType from "./quizComponents/choose";

export default class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFE5C8', flex: 1 }}>
        <AppConatiner />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Home: BarCodeScan,
  Login: Login,
});
const AppConatiner = createAppContainer(AppNavigator);

/*orange:#FEAE53
white:#FFFFFF
brown:#55363E
creme:#FFE5C8 
dark creme:#EAD4C2*/
