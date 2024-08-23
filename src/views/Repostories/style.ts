import {StyleSheet} from 'react-native';
import {backgroundContainer} from '../../utils/styles/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundContainer,
    paddingBottom: 0,
    paddingHorizontal: 10,
  },
  scrollContainer: {
    minHeight: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: backgroundContainer,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
