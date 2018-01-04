import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import gs from '../styles'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class Button extends Component {
  render() {
    const {
      item,
      label,
      onPress,
      round,
      style,
    } = this.props

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          round ? styles.roundContainer : styles.container,
          style,
        ]}
        underlayColor='transparent'
      >
       {item ? item : <Text style={styles.text}>{label}</Text>}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: gs.colors.grey,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  roundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 100,
    shadowColor: gs.colors.grey,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  text: {
    color: gs.colors.blue,
    fontSize: 14,
  },
})
