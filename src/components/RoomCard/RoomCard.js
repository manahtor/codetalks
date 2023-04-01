import {TouchableOpacity, Text} from 'react-native';
import styles from './RoomCard.style';
import React from 'react';

export default function RoomCard({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
