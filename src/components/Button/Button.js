import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.style';
import React from 'react';

export default function Button({text, onPress, isColored, waiting}) {
  return (
    <TouchableOpacity
      style={styles.container(isColored)}
      onPress={waiting ? () => {} : onPress}>
      {waiting ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.text(isColored)}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
