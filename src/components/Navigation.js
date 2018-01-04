import React from 'react'
import { Animated, Button, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import Home from '../layouts/Home'
import NewDeck from '../layouts/NewDeck'

const Navigation = StackNavigator(
  {
    Home: {
      screen: Home,
      path: '/',
      navigationOptions: {
        title: 'Home'
      },
    },
    NewDeck: {
      screen: NewDeck,
      path: '/new-deck',
      navigationOptions: {
        title: 'Add a New Deck'
      },
    },
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0a7aff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'muli-black',
        fontSize: 18,
      },
    },
  }
);

export default Navigation;
