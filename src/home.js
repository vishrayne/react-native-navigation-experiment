// @format
// @flow

import React, { Component } from 'react';
import { NavigatorProp } from 'react-native-navigation';
import { View, Text, Button, StyleSheet } from 'react-native';
import Logger from './utils/logger';
import AsyncCache from './utils/async-cache';

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

type HomeProps = NavigatorProp & {
  goToAuth: () => void,
  goToScreen2: (componentID: number) => void,
};
type HomeState = {
  username: string,
};
export default class Home extends Component<HomeProps, HomeState> {
  state: HomeState = {
    username: '',
  };

  async componentDidMount() {
    try {
      Logger.info('component mount');
      const user = await AsyncCache.getUser();
      Logger.info('component mount: ', user);
      this.setState({ username: user });
    } catch (err) {
      Logger.error('unexpected error!', err);
    }
  }

  logoutAsync = async () => {
    const { goToAuth } = this.props;
    try {
      await AsyncCache.removeUser;
      goToAuth();
    } catch (err) {
      Logger.error('Unexpected error!, ', err);
    }
  };

  goToDetails = (componentID: number) => {
    const { goToScreen2 } = this.props;
    goToScreen2(componentID);
  };

  render() {
    const { username } = this.state;
    const { componentId } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello {username}!</Text>
        <Button onPress={this.logoutAsync} title="Sign Out" />
        <Button onPress={() => this.goToDetails(componentId)} title="View Details" />
      </View>
    );
  }
}
