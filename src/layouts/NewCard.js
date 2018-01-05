import React, { Component } from 'react'
import InputScrollView from 'react-native-input-scroll-view'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../components/Button'
import { goHome } from '../utils/helpers'
import gs from '../styles'
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native'

export default class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  }

  handleSubmit = () => {
    this.props.navigation.navigate('Deck', {
      name: this.state.name
    })
  }

  render() {
    const { navigation } = this.props
    return (
      <InputScrollView style={styles.container}>
        <Text style={styles.text}>Question</Text>
        <TextInput
          blurOnSubmit
          multiline
          autoCorrect={false}
          onBlur={() => Keyboard.dismiss}
          onChangeText={question => this.setState({ question})}
          onSubmitEditing={() => {}}
          returnKeyType='next'
          style={[
            styles.input,
            { marginBottom: 50, },
          ]}
          value={this.state.question}
        />
        <Text style={styles.text}>Answer</Text>
        <TextInput
          blurOnSubmit
          multiline
          autoCorrect={false}
          onBlur={() => Keyboard.dismiss}
          onChangeText={answer => this.setState({ answer })}
          onSubmitEditing={() => {}}
          returnKeyType='done'
          style={styles.input}
          value={this.state.answer}
        />
        <Button
          onPress={() => {}}
          item={<Text style={styles.buttonText}>Add Another Card</Text>}
          style={[
            styles.button,
            { marginTop: 60 },
          ]}
        />
        <Button
          onPress={() => navigation.dispatch(goHome)}
          item={<Text style={styles.buttonText}>Done</Text>}
          style={[
            styles.button,
            { marginTop: 25, backgroundColor: gs.colors.blue },
          ]}
        />
      </InputScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: gs.colors.white,
  },
  button: {
    width: '100%',
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
    marginBottom: 20,
    color: gs.colors.darkGrey,
    fontFamily: gs.fonts.bold,
    fontSize: 18,
  },
  input: {
    marginLeft: 3,
    borderBottomWidth: 2,
    borderBottomColor: gs.colors.blue,
    color: gs.colors.darkGrey,
    fontFamily: gs.fonts.bold,
    fontSize: 18,
  },
})
