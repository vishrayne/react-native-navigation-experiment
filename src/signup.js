import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Logger from './utils/logger';

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type SignUpProps = {};
type SignUpState = {
  username: string,
  password: string,
  email: string,
  phoneNumber: string,
};
export default class SignUp extends Component<SignUpProps> {
  state: SignUpState = {
    username: '',
    password: '',
    email: '',
    phoneNumber: '',
  };

  onChangeText = (key: String, value: string) => {
    this.setState({ [key]: value });
  };

  signUp = async () => {
    const { username, password, email, phoneNumber } = this.state;
    Logger.info('Registering user: ', username, password, email, phoneNumber);
    // rest of the signup logic
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button title="Sign Up" onPress={this.signUp} />
      </View>
    );
  }
}
