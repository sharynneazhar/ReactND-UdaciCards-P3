// actions/decks.js

export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export const getDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
