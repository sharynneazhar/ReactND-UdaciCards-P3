import React, { Component } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../components/Button'
import gs from '../styles'
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
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
        <TextInput
          blurOnSubmit
          autoCapitalize='words'
          autoCorrect={false}
          onBlur={() => Keyboard.dismiss}
          onChangeText={this.handleInputChange}
          onSubmitEditing={this.handleSubmit}
          placeholder="Deck Title"
          returnKeyType='done'
          style={styles.input}
          value={this.state.name}
        />
        <Button
          onPress={() => navigation.navigate('NewCard')}
          item={<Text style={styles.buttonText}>{'Let\'s add some cards!'}</Text>}
          style={styles.button}
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
  button: {
    width: '100%',
    marginTop: 50,
    padding: 15,
    backgroundColor: gs.colors.orange,
    borderRadius: 4,
  },
  buttonText: {
    color: gs.colors.white,
    fontSize: 15,
    fontFamily: gs.fonts.bold,
  },
  text: {
    marginBottom: 50,
    color: gs.colors.darkGrey,
    fontFamily: gs.fonts.bold,
    fontSize: 32,
  },
  input: {
    marginLeft: 3,
    borderBottomWidth: 2,
    borderBottomColor: gs.colors.blue,
    color: gs.colors.darkGrey,
    fontFamily: gs.fonts.bold,
    fontSize: 20,
  },
})
