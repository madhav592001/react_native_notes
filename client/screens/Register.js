import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { register } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

export default function Register() {
  const dispatch = useDispatch();
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');

  const userRegisterDedails = useSelector((state) => state.userRegisterDetails);
  const { user, error } = userRegisterDedails;
  console.log(user,error)

  useEffect(() => {
    if (user) {
      showMessage({
        message: 'Registeration Successfull',
        type: 'success',
      });
    }
    if (error) {
      // alert(error);
      showMessage({
        message: error,
        type: 'danger',
      });
    }
  }, [user, error]);

  const registerUser = (e) => {
    e.preventDefault();

    const config = {
      email: email,
      password: password,
      confirm_password: confirmPassword,
      full_name: fullName,
      user_name: userName,
    };
    dispatch(register(config));
  };

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
        <TouchableOpacity style={styles.btn} onPress={registerUser}>
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
  btn: {
    backgroundColor: '#2666CF',
    padding: 15,
    width: '45%',
    borderRadius: 5,
    marginTop: '10%',
  },
  btn_text: {
    color: '#EEEEEE',
    fontSize: 16,
    textAlign: 'center',
  },
});
