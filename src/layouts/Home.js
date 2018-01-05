import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Button from '../components/Button'
import NoDeck from '../components/NoDeck'
import gs from '../styles'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'


export default class Home extends Component {
  render() {
    const { navigation } = this.props
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <NoDeck />
        <Button
          round
          onPress={() => navigation.navigate('NewDeck')}
          item={
            <Ionicons
              color={gs.colors.white}
              name='md-add'
              size={28}
            />
          }
          style={styles.button}
        />
        <StatusBar barStyle="default" />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: gs.colors.white,
    padding: 40,
  },
  button: {
    position: 'absolute',
    bottom: 60,
    right: 35,
    backgroundColor: gs.colors.blue,
    borderColor: gs.colors.blue,
    height: 60,
    width: 60,
    paddingTop: 8,
  },
})
