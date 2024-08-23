import {StyleSheet} from 'react-native';
import {backgroundSecondary} from '../../utils/styles/colors';

export const style = StyleSheet.create({
  container: {
    backgroundColor: backgroundSecondary,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    padding: 5,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
