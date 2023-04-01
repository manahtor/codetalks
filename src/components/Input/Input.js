import React from 'react';
import styles from './Input.style';
import {TextInput} from 'react-native';

export default function Input({value, placeholder, onChangeText}) {
  return (
    <TextInput
      style={styles.container}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor="#d8d8d8"
    />
  );
}
