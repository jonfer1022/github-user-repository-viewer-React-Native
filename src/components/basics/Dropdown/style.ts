import { StyleSheet } from 'react-native';
import {
  backgroundTertiary,
  secondaryAction,
} from '../../../utils/styles/colors';
import { typography } from '../../../utils/styles/typography';

export const style = StyleSheet.create({
  dropdownButton: {
    padding: 10,
    borderColor: secondaryAction,
    backgroundColor: backgroundTertiary,
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 10,
  },
  placeholder: {
    ...typography.paragraph,
    color: '#aeaeae',
  },
  inputSearch: {
    marginBottom: 0,
    width: '100%',
    borderRadius: 0,
  },
  selectedTextStyle: {
    ...typography.paragraph,
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: secondaryAction,
    backgroundColor: backgroundTertiary,
    opacity: 0.9,
  },
});
