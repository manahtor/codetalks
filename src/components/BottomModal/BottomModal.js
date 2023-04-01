import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';

import styles from './BottomModal.style';

export default function BottomModal({title, visible, setVisible, children}) {
  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.6}
      animationIn="slideInUp"
      swipeDirection="down"
      onSwipeComplete={() => setVisible(false)}
      onBackdropPress={() => setVisible(false)}
      style={styles.modal}>
      <View style={styles.header(title)}>
        <View style={styles.touchLine} />
        {title ? <Text style={styles.title}>{title}</Text> : null}
      </View>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
}
