import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './AddButton.style';
import React from 'react';

import BottomModal from '../BottomModal';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function AddButton({onPress, waiting, placeholder}) {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleSubmit = () => {
    onPress(value);
    setVisible(false);
    setValue('');
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setVisible(!visible)}>
      {waiting ? <ActivityIndicator /> : <Text style={styles.text}>+</Text>}
      <BottomModal visible={visible} setVisible={setVisible}>
        <Input
          placeholder={placeholder}
          onChangeText={setValue}
          value={value}
        />
        <Button text="Ekle" isColored={true} onPress={handleSubmit} />
      </BottomModal>
    </TouchableOpacity>
  );
}
