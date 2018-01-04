import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Banner from '../components/Banner'
import {
  Animated,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

export default class Home extends Component {
  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
        <Button
          onPress={() => navigation.navigate('NewDeck')}
          title="Add a New Deck"
        />
        <StatusBar barStyle="default" />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})
