import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import styles from './Rooms.style';
import RoomCard from '../../components/RoomCard/RoomCard';
import AddButton from '../../components/AddButton/AddButton';

export default function Rooms({navigation}) {
  const [rooms, setRooms] = React.useState([]);

  useEffect(() => {
    database()
      .ref('/rooms')
      .on('value', snapshot => {
        const val = snapshot.val();
        if (!val) return;
        const vals = Object.keys(val).map(key => ({
          id: key,
          ...val[key],
        }));
        setRooms(vals);
      });
  }, []);

  const handleAdd = text => {
    const username = auth().currentUser.email.split('@')[0];
    const roomInfo = {
      date: Date.now(),
      name: text,
      author: username,
      messages: [
        {
          date: new Date().toISOString(),
          text: `${text} odası ${username} tarafından kuruldu`,
          username: username,
        },
      ],
    };
    database().ref('/rooms').push(roomInfo);
  };

  const handleGoRoom = item => {
    navigation.navigate('Room', {roomID: item.id, roomName: item.name});
  };

  const renderItem = ({item}) => (
    <RoomCard
      text={item.name}
      key={item.date}
      onPress={() => handleGoRoom(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={rooms} renderItem={renderItem} numColumns={2} />
      <AddButton onPress={handleAdd} placeholder="Oda adı..." />
    </SafeAreaView>
  );
}
