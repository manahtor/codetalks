import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    flexGrow: 0,
  },
  username: {
    textAlign: 'left',
    color: 'black',
    fontSize: 16,
    flex: 1,
  },
  date: {
    textAlign: 'right',
    color: 'black',
    fontSize: 16,
    fontStyle: 'italic',
  },
  text: {
    paddingVertical: 5,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    flex: 1,
  },
});
