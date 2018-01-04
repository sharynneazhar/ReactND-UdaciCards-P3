import React, { Component } from 'react'
import gs from '../styles'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Card extends Component {
  state = {
    stacked: this.props.stacked || false,
  }

  render() {
    const { style } = this.props

    if (!this.state.stacked) {
      return (
        <View style={defaultStyles.container}>
          <View style={[
            defaultStyles.first,
            style,
          ]}>
            <View style={defaultStyles.innerTop}></View>
            <View style={defaultStyles.innerBottom}>
              <Text>Bottom</Text>
            </View>
          </View>
        </View>
      )
    }

    return (
      <View style={defaultStyles.container}>
        <View style={[
          defaultStyles.last,
          style,
        ]}></View>
        <View style={[
          defaultStyles.middle,
          style,
        ]}></View>
        <View style={[
          defaultStyles.first,
          style,
        ]}>
          <View style={defaultStyles.innerTop}></View>
          <View style={defaultStyles.innerBottom}>
            <Text>Bottom</Text>
          </View>
        </View>
      </View>
    )
  }
}

const defaultStyles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  last: {
    height: 11.5,
    width: '90%',
    position: 'absolute',
    top: 0,
    backgroundColor: gs.colors.blue,
    borderRadius: 3,
    opacity: 0.4,
  },
  middle: {
    height: 11.5,
    width: '95%',
    position: 'absolute',
    top: 10,
    backgroundColor: gs.colors.blue,
    borderRadius: 3,
    opacity: 0.8,
  },
  first: {
    height: 150,
    width: '100%',
    position: 'absolute',
    top: 20,
    backgroundColor: gs.colors.blue,
    borderRadius: 3,
    shadowColor: gs.colors.blue,
    shadowOpacity: 0.2,
    shadowOffset: { height: 5, width: 0 },
    shadowRadius: 12,
  },
  innerTop: {
    height: '52%',
  },
  innerBottom: {
    height: '48%',
    backgroundColor: gs.colors.white,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    padding: 15,
  },
})
