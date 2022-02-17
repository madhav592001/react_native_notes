import { View, Text } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
