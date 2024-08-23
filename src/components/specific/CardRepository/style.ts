import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  pressable: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
