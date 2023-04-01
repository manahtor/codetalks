import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  header: isLine => ({
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    paddingBottom: 0,
    borderBottomWidth: isLine ? 0.6 : 0,
    borderBottomColor: '#cdcdcd',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }),
  touchLine: {
    backgroundColor: '#121212',
    height: 5,
    width: '13%',
    borderRadius: 3,
    alignSelf: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15,
    textAlign: 'center',
  },
  container: {
    width: '100%',
    padding: 5,
    paddingBottom: 10,
    backgroundColor: 'white',
    maxHeight: '80%',
  },
});
