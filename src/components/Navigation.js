import React from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Home from '../layouts/Home'
import Deck from '../layouts/Deck'
import NewDeck from '../layouts/NewDeck'
import gs from '../styles'

const Navigation = StackNavigator(
  {
    Home: {
      screen: Home,
      path: '/',
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        headerBackTitle: null,
      }),
    },
    Deck: {
      screen: Deck,
      path: '/deck/:name',
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
        headerBackTitle: null,
      }),
    },
    NewDeck: {
      screen: NewDeck,
      path: '/new-deck',
      navigationOptions: ({ navigation }) => ({
        title: 'New Deck',
        headerBackTitle: null,
      }),
    },
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerStyle: {
        backgroundColor: gs.colors.white,
        borderBottomColor: 'transparent',
        borderWidth: 0,
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: gs.colors.lightGrey,
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
      },
      headerTintColor: gs.colors.darkGrey,
      headerTitleStyle: {
        fontFamily: 'muli-black',
        fontSize: 16,
      },
    },
  }
);

export default Navigation;
