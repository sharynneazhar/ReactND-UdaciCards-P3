import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../layouts/Home'
import DeckDetail from '../layouts/DeckDetail'
import NewDeck from '../layouts/NewDeck'
import NewCard from '../layouts/NewCard'
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
      screen: DeckDetail,
      path: '/deck/:name',
      navigationOptions: ({ navigation }) => ({
        title: 'Study Set',
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
    NewCard: {
      screen: NewCard,
      path: '/new-card',
      navigationOptions: ({ navigation }) => ({
        title: 'New Card',
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
        paddingHorizontal: 15,
        shadowColor: gs.colors.grey,
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
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
