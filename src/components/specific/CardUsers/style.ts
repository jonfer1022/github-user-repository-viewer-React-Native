import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  pressable: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    borderRadius: 80 / 2,
    marginVertical: 5,
  },
  detail: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
