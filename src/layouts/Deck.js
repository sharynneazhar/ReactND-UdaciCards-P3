import React, { Component } from 'react'
import gs from '../styles'
import Button from '../components/Button'
import Card from '../components/Card'
import NoCard from '../components/NoCard'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Deck extends Component {
  state = {
    name: '',
  }

  render() {
    const { navigation } = this.props
    const deckName = navigation.state.params.name
    return (
      <View style={styles.container}>
        <NoCard />
        <Button
          onPress={() => navigation.navigate('NewCard')}
          item={<Text style={styles.buttonText}>Add a Card</Text>}
          style={styles.button}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: gs.colors.white,
    padding: 40,
  },
  button: {
    position: 'absolute',
    bottom: 50,
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
})
