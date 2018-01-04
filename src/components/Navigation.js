import React from 'react'
import { Animated, Easing, TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'
import Home from '../layouts/Home'
import NewDeck from '../layouts/NewDeck'
import styles from '../styles'

const SettingsButton = () => (
  <TouchableHighlight
    onPress={() => {}}
    underlayColor='transparent'
  >
    <MaterialIcons
      color={styles.colors.darkGrey}
      name="settings"
      size={24}
    />
  </TouchableHighlight>
)

const Navigation = StackNavigator(
  {
    Home: {
      screen: Home,
      path: '/',
      navigationOptions: {
        title: 'Home',
        headerBackTitle: null,
        // headerRight: <SettingsButton />,
      },
    },
    NewDeck: {
      screen: NewDeck,
      path: '/new-deck',
      navigationOptions: {
        title: 'New Deck',
        headerBackTitle: null,
        // headerRight: <SettingsButton />,
      },
    },
  },
  {
    headerMode: 'float',
    navigationOptions: {
      headerStyle: {
        backgroundColor: styles.colors.white,
        height: 50,
        paddingLeft: 15,
        paddingRight: 25,
      },
      headerTintColor: styles.colors.darkGrey,
      headerTitleStyle: {
        fontFamily: 'muli-black',
        fontSize: 16,
      },
    },
  }
);

export default Navigation;
