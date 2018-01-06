import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import gs from '../styles'
import {
  Animated,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'


export default class Button extends Component {
  state = {
    focusedAnim: new Animated.Value(0),
  }

  renderIcon = () => {
    const {
      iconClass,
      iconName,
      iconColor,
      iconHeight,
      item,
      label,
      onPress,
      round,
      style,
    } = this.props
    const { focusedAnim } = this.state

    const _iconClass = iconClass ? iconClass : Ionicons
    const name = iconName ? iconName : 'ios-add'
    const color = iconColor ? iconColor : 'white'
    const height = iconHeight ? iconHeight : 22
    const AnimatedIcon = Animated.createAnimatedComponent(_iconClass)

    return (
      <AnimatedIcon
        name={name}
        color={color}
        style={{
          right: focusedAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 12],
          }),
          transform: [{
            rotate: focusedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '-90deg'],
            }),
          }],
          fontSize: height,
          paddingVertical: 4,
          textAlign: 'center',
        }}
      />
    )
  }

  render() {
    const {
      iconName,
      item,
      label,
      onPress,
      round,
      style,
      backgroundColor,
    } = this.props
    const bgColor = backgroundColor ? { backgroundColor: backgroundColor } : {}

    return (
      <TouchableHighlight
        onPress={onPress}
        style={[
          round ? styles.roundContainer : styles.container,
          style,
          bgColor,
        ]}
        underlayColor={backgroundColor ? backgroundColor : gs.colors.white}
      >
        <View>
          {!round && iconName ? this.renderIcon() : null}
          {item ? item : <Text style={styles.text}>{label}</Text>}
        </View>
      </TouchableHighlight>
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
    shadowOpacity: 0.4,
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
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  text: {
    color: gs.colors.blue,
    fontSize: 14,
  },
})
