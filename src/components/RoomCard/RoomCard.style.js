import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../config/colors';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').width / 3,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: colors.set1,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
