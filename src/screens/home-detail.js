// @format
// @flow
import React, { Component } from 'react';
import { NavigatorProp } from 'react-native-navigation';
import { View, Text, StyleSheet, Button } from 'react-native';

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

type Screen2Props = NavigatorProp & {
  goBack: (componentID: number) => void,
};
export default class Details extends Component<Screen2Props> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Details',
        },
      },
    };
  }

  goBack = (componentID: number) => {
    const { goBack } = this.props;
    goBack(componentID);
  };

  render() {
    const { componentId } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>DetailsScreen</Text>
        <Button onPress={() => this.goBack(componentId)} title="Go Back" />
      </View>
    );
  }
}
