import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type HomeProps = {};
export default class Home extends Component<HomeProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HomeScreen</Text>
      </View>
    );
  }
}
