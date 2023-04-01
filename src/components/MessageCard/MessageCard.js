import styles from './MessageCard.style';
import {View, Text} from 'react-native';
import {formatDistance} from 'date-fns';
import {tr} from 'date-fns/locale';
import React from 'react';

export default function MessageCard({text, username, date}) {
  console.log(text, username, date);
  const date_str = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.date}>{date_str}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
