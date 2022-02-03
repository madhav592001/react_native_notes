import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');

  const userLoginDetails = useSelector((state) => state.userLoginDetails);

  const { user, loading, error } = userLoginDetails;

  const loginUser =  () => {
    const config = {
      email,
      password,
    };
    console.log(config);

    dispatch(login(config));
  };

  if (user) {
    console.log(user);
    // alert('Successfull Login!!');
  }

  if (error) {
    alert(error);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Login Screen For Sticky Notes</Text>

      <View style={styles.logo_container}>
        <Image
          source={{
            uri: 'https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png',
          }}
          style={styles.logo}
        />
      </View>

      <View style={styles.login_form_container}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEamil(text)}
          placeholder='Email'
        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn} onPress={loginUser}>
            <Text style={styles.btn_text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.btn_text}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#0F0E0E',
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginTop: -50,
    marginBottom: '5%',
    fontSize: 25,
    fontWeight: 'bold',
  },
  logo: {
    resizeMode: 'cover',
    width: '75%',
    height: 180,
  },
  logo_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  login_form_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  input: {
    width: '90%',
    backgroundColor: '#EEEEEE',
    padding: 10,
    marginBottom: 10,
    borderRadius: 17,
  },
  btn_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: '7%',
  },
  btn: {
    backgroundColor: '#8B9A46',
    padding: 15,
    width: '45%',
  },
  btn_text: {
    color: '#EEEEEE',
    fontSize: 16,
    textAlign: 'center',
  },
});
