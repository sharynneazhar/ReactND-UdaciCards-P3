import React, { Component } from 'react'
import gs from '../styles'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default class Card extends Component {
  state = {
    preview: this.props.preview || false,
  }

  render() {
    const {
      disabled,
      containerStyle,
      onPress,
      style,
      subtext,
      text,
    } = this.props

    if (!this.state.preview) {
      return (
        <TouchableOpacity
          disabled={disabled}
          onPress={onPress}
          underlayColor='transparent'
          style={[
            defaultStyles.container,
            containerStyle,
          ]}
        >
          <View style={[
            defaultStyles.first,
            style,
          ]}>
            <View style={[
              defaultStyles.innerBottom,
              { height: '100%', borderRadius: 3, },
            ]}>
              <Text style={defaultStyles.text}>{text}</Text>
              <Text style={[
                defaultStyles.subtext,
                { marginTop: 8, }
              ]}>{subtext}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        underlayColor='transparent'
        style={[
          defaultStyles.container,
          containerStyle,
        ]}
      >
        <View style={defaultStyles.last}></View>
        <View style={defaultStyles.middle}></View>
        <View style={[ defaultStyles.first, style, ]}>
          <View style={defaultStyles.innerTop}></View>
          <View style={defaultStyles.innerBottom}>
            <Text style={defaultStyles.text}>{text}</Text>
            <Text style={defaultStyles.subtext}>{subtext}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const defaultStyles = StyleSheet.create({
  container: {
    height: 210,
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
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 8,
  },
  innerTop: {
    height: '52%',
  },
  innerBottom: {
    height: '48%',
    backgroundColor: gs.colors.white,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: gs.fonts.bold,
    color: gs.colors.darkGrey,
  },
  subtext: {
    marginTop: 3,
    fontFamily: gs.fonts.regular,
    color: gs.colors.grey,
  }
})
