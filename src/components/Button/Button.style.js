import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export default StyleSheet.create({
  container: isColored => ({
    backgroundColor: isColored ? colors.set2 : 'white',
    padding: 10,
    margin: 10,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
  text: isColored => ({
    textAlign: 'center',
    fontWeight: 'bold',
    color: isColored ? 'white' : colors.set2,
    fontSize: 18,
  }),
});
