import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { AppLoading, Font } from 'expo'
import Navigation from './components/Navigation'
import reducers from './reducers'
import gs from './styles'

export default class App extends Component {
  state = {
    fontLoaded: false,
  }

  async _loadAssets() {
    await Font.loadAsync({
      'muli': require('../assets/fonts/Muli-Regular.ttf'),
      'muli-light': require('../assets/fonts/Muli-Light.ttf'),
      'muli-bold': require('../assets/fonts/Muli-Bold.ttf'),
      'muli-black': require('../assets/fonts/Muli-Black.ttf'),
    });
    return Promise.all({})
  }

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadAssets}
          onFinish={() => this.setState({ fontLoaded: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: gs.colors.white,
  },
})
