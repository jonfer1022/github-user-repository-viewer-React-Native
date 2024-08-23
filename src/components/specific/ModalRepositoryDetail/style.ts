import {StyleSheet} from 'react-native';
import {backgroundSecondary} from '../../../utils/styles/colors';

export const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modal: {
    backgroundColor: backgroundSecondary,
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    borderRadius: 80 / 2,
    marginVertical: 5,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
