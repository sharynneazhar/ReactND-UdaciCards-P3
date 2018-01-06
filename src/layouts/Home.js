import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import Button from '../components/Button'
import Card from '../components/Card'
import NoDeck from '../components/NoDeck'
import gs from '../styles'
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

class Home extends Component {
  renderDecks = decks => (
    <FlatList
      data={decks}
      keyExtractor={(item, key) => key}
      renderItem={({ item }) => {
        const { navigation } = this.props
        const len = item.questions.length
        return (
          <Card
            preview
            onPress={() => navigation.navigate('Deck', { deck: item })}
            subtext={`${len} ${len > 1 ? 'cards' : "card"}`}
            text={item.title}
          />
        )
      }}
      style={styles.listContainer}
      contentContainerStyle={{ paddingBottom: 40 }}
    />
  )

  render() {
    const { decks, navigation } = this.props
    return (
      <View style={styles.container}>
        {decks.length > 0 ? this.renderDecks(decks) : <NoDeck />}
        <Button
          round
          onPress={() => navigation.navigate('NewDeck')}
          item={
            <Ionicons
              color={gs.colors.white}
              name='md-add'
              size={28}
            />
          }
          style={styles.button}
          backgroundColor={gs.colors.orange}
        />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: gs.colors.white,
    padding: 30,
  },
  listContainer: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
  },
  button: {
    position: 'absolute',
    bottom: 60,
    right: 35,
    borderColor: gs.colors.orange,
    height: 60,
    width: 60,
    paddingTop: 8,
  },
})

function mapStateToProps({ decks }) {
  return {
    decks: Object.values(decks).map(deck => ({ ...deck }))
  }
}

export default connect(mapStateToProps)(Home)
