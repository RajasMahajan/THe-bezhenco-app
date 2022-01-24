import * as React from 'react';
import { Text, View, StyleSheet ,TextInput,TouchableOpacity,} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Typeone from './Screens/Typeone';
import Readone from './Screens/Readone';
export default class App extends React.Component{
  render(){
    return(
      //<View> 
    <AppContainer/>
      
    )
  }
}
const AppTabNavigationone = createBottomTabNavigator({
  TypeHere:{screen:Typeone},
  ReadHere:{screen:Readone},
})
const AppContainer = createAppContainer(
  AppTabNavigationone
)