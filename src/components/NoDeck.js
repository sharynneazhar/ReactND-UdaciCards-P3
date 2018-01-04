import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import gs from '../styles'

export default class NoDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons
          color={gs.colors.lightGrey}
          name='cards-outline'
          size={140}
        />
        <Text style={styles.text}>
          No Quizzes Found
        </Text>
        <Text style={styles.subtext}>
          Click the add button to get started!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    marginTop: 20,
    color: gs.colors.grey,
    fontFamily: gs.fonts.bold,
    fontSize: 18,
  },
  subtext: {
    marginTop: 20,
    color: gs.colors.lightGrey,
    fontFamily: gs.fonts.bold,
    fontSize: 16,
  },
})
