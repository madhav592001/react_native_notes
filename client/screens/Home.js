import { View, Text } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../redux/actions/notesActions';
import { useEffect } from 'react';

const notes = [
  {
    title: 'Madhav',
    description: 'I will finish this project in about 11 days',
  },
  {
    title: 'Madhav',
    description: 'I will finish this project in about 11 days',
  },
  {
    title: 'Madhav',
    description: 'I will finish this project in about 11 days',
  },
  {
    title: 'Madhav',
    description: 'I will finish this project in about 11 days',
  },
  {
    title: 'Madhav',
    description: 'I will finish this project in about 11 days',
  },
  {
    title: 'Madhav',
    description: 'I will finish this project in about 11 days',
  },
  {
    title: 'Madhav',
    description: 'I will finish this project in about 11 days',
  },
];

export default function Home() {
  const dispatch = useDispatch();

  const notesDetails = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, []);
  
  const { loading, notes, error } = notesDetails;
  console.log(notes);

  // console.log(notes);

  // AsyncStorage.getItem("jwt_token").then(jwt => console.log(jwt)) ;

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
