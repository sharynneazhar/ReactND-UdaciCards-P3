import React, { Component } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Button from '../components/Button'
import Card from '../components/Card'
import NoCard from '../components/NoCard'
import gs from '../styles'
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class DeckDetail extends Component {
  renderCards = (questions) => (
    <FlatList
      data={questions}
      keyExtractor={(item, key) => key}
      renderItem={({ item }) => (
        <Card
          disabled
          onPress={() => {}}
          subtext={item.answer}
          text={item.question}
          containerStyle={styles.cardContainer}
          style={styles.card}
        />
      )}
      style={styles.listContainer}
      contentContainerStyle={{ paddingBottom: 40 }}
    />
  )

  render() {
    const { navigation } = this.props
    const deck = navigation.state.params.deck
    const { title, questions } = deck
    const len = questions.length;

    return (
      <View style={styles.container}>
        <View style={styles.overlay} />
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {title}
          </Text>
          <Text style={styles.headerSubText}>
            {`${len} ${len > 1 ? 'cards' : "card"}`}
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            iconName='md-add'
            iconColor={gs.colors.white}
            item={<Text style={styles.buttonText}>ADD CARD</Text>}
            onPress={() => navigation.navigate('NewCard')}
            style={styles.button}
            backgroundColor='transparent'
          />
          <Button
            iconClass={MaterialCommunityIcons}
            iconName='glasses'
            iconColor={gs.colors.white}
            item={<Text style={styles.buttonText}>LEARN</Text>}
            onPress={() => navigation.navigate('NewCard')}
            style={styles.button}
            backgroundColor='transparent'
          />
          <Button
            iconName='md-close'
            iconColor={gs.colors.white}
            item={<Text style={styles.buttonText}>REMOVE</Text>}
            onPress={() => navigation.navigate('NewCard')}
            style={styles.button}
            backgroundColor='transparent'
          />
        </View>
        {questions.length > 0 ? this.renderCards(deck.questions) : <NoCard />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: gs.colors.white,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    height: 210,
    width: Dimensions.get('window').width,
    backgroundColor: gs.colors.blue,
  },
  listContainer: {
    marginTop: 38,
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  headerText: {
    backgroundColor: 'transparent',
    color: gs.colors.white,
    fontFamily: gs.fonts.black,
    fontSize: 22,
  },
  headerSubText: {
    marginTop: 8,
    backgroundColor: 'transparent',
    color: gs.colors.white,
    fontSize: 16,
  },
  buttonGroup: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '31%',
    padding: 8,
    borderRadius: 2,
    borderColor: gs.colors.white,
    borderWidth: 1,
  },
  buttonText: {
    color: gs.colors.white,
    fontSize: 13,
    fontFamily: gs.fonts.bold,
  },
  cardContainer: {
    height: 170,
  },
  card: {
    shadowColor: gs.colors.darkGrey,
    shadowOpacity: 0.2,
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 8,
  }
})
