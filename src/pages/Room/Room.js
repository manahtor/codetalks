import database from '@react-native-firebase/database';
import {SafeAreaView, FlatList} from 'react-native';
import auth from '@react-native-firebase/auth';
import React from 'react';

import MessageCard from '../../components/MessageCard/MessageCard';
import AddButton from '../../components/AddButton/AddButton';
import styles from './Room.style';

export default function Room({navigation, route}) {
  const {roomID, roomName} = route.params;
  const [messages, setMessages] = React.useState();

  React.useEffect(() => {
    navigation.setOptions({title: roomName});

    database()
      .ref(`/rooms/${roomID}/messages`)
      .on('value', snapshot => {
        const val = snapshot.val();
        if (!val) return;
        const vals = Object.keys(val).map(key => ({
          id: key,
          ...val[key],
        }));
        vals.sort(function (a, b) {
          return a.date - b.date;
        });
        setMessages(vals);
      });
  }, []);

  console.log('roomID: ' + roomID, roomName);

  const handleAdd = text => {
    const username = auth().currentUser.email.split('@')[0];
    const message = {
      date: Date.now(),
      username: username,
      text: text,
    };
    database().ref(`/rooms/${roomID}/messages`).push(message);
  };

  const renderItem = ({item}) => (
    <MessageCard username={item.username} text={item.text} date={item.date} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={messages} renderItem={renderItem} />
      <AddButton onPress={handleAdd} placeholder="Mesajın..." />
    </SafeAreaView>
  );
}
