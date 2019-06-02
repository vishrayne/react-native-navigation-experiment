// @format
// @flow

import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Logger from './utils/logger';
import AsyncCache from './utils/async-cache';

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 14,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type SignInProps = {
  goToHome: () => void,
};
type SignInState = {
  username: string,
  password: string,
};
export default class SignIn extends Component<SignInProps, SignInState> {
  state: SignInState = {
    username: '',
    password: '',
  };

  onChangeText = (key: string, value: string) => {
    this.setState({ [key]: value });
  };

  signInAsync = async () => {
    const { username, password } = this.state;
    const { goToHome } = this.props;

    if (password !== 'password') {
      Logger.error('Invalid password! Use a strong `password` ;)');
      return;
    }

    try {
      const user = await AsyncCache.setUser(username);
      Logger.info('successful login: ', user);
      goToHome();
    } catch (err) {
      Logger.error('Unexpected error: ', err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button title="Sign In" onPress={this.signInAsync} />
      </View>
    );
  }
}
