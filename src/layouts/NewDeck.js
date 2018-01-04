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

export default class NewDeck extends Component {
  render() {
    return (
      <ScrollView>
        <Button
          onPress={() => {}}
          title="Add Card"
        />
        <StatusBar barStyle="default" />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})
