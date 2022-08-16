import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 27,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 68,
    textTransform: 'uppercase',
  },
  textInput: {
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  separator: {
    height: 16,
  },
  btnLogin: {
    backgroundColor: 'red',
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 26,
  },
  btnLoginText: {
    fontSize: 17,
    letterSpacing: 0.2,
    alignSelf: 'center',
    color: '#fff',
  },
});
