import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, } from 'react-native'

const Banner = ({ label }) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.banner}>{label}</Text>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginBottom: 20,
    backgroundColor: "#0a7aff",
  },
  banner: {
    fontFamily: 'muli-black',
    fontSize: 18,
    color: '#fff',
  }
})

export default Banner
