import React, { Component } from 'react'
import { Sae } from 'react-native-textinput-effects';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import gs from '../styles'
import {
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class NewDeck extends Component {
  state = {
    name: '',
  }

  handleInputChange = (name) => {
    this.setState({ name })
  }

  handleSubmit = () => {
    this.props.navigation.navigate('Deck', {
      name: this.state.name
    })
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          What's the title of your deck?
        </Text>
        <Sae
          autoCorrect={false}
          blurOnSubmit={true}
          iconClass={MaterialCommunityIcons}
          iconName={'lead-pencil'}
          iconColor={gs.colors.blue}
          inputStyle={styles.input}
          label='Deck Title'
          labelStyle={styles.label}
          onBlur={() => Keyboard.dismiss}
          onChangeText={this.handleInputChange}
          onSubmitEditing={this.handleSubmit}
          returnKeyType='done'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: gs.colors.white,
  },
  text: {
    marginBottom: 50,
    color: gs.colors.darkGrey,
    fontFamily: gs.fonts.bold,
    fontSize: 32,
  },
  label: {
    color: gs.colors.darkGrey,
    fontFamily: gs.fonts.bold,
  },
  input: {
    color: gs.colors.darkGrey,
    fontFamily: gs.fonts.bold,
    fontSize: 20,
  },
})
