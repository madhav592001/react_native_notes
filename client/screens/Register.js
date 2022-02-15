import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

export default function Register() {
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>REGISTER FOR STICKY NOTES</Text>

      <View style={styles.login_form_container}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEamil(text)}
          placeholder='Email'
        />
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={(text) => setUserName(text)}
          placeholder='User Name'
        />
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          placeholder='Full Name'
        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.btn_text}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#2C3333',
    display: 'flex',
    alignItems: 'center',
  },
  h1: {
    color: '#EEEEEE',
    fontSize: 25,
    fontWeight: '700',
    marginTop: 150,
    marginBottom: 50,
  },
  login_form_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    width: '100%',
  },
  input: {
    width: '90%',
    backgroundColor: '#EEEEEE',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  btn_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: '7%',
  },
  btn: {
    backgroundColor: '#2666CF',
    padding: 15,
    width: '45%',
    borderRadius: 5,
  },
  btn_text: {
    color: '#EEEEEE',
    fontSize: 16,
    textAlign: 'center',
  },
});
