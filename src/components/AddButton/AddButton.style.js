import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.set2,
    position: 'absolute',
    borderRadius: 40,
    bottom: 20,
    height: 70,
    width: 70,
    right: 20,
    borderWidth: 0.6,
    borderColor: '#00000033',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    // verticalAlign: 'middle',
  },
  text: {
    textAlign: 'center',
    fontWeight: '300',
    color: 'white',
    fontSize: 60,
  },
});
