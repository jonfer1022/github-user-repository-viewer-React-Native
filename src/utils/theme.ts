import { DefaultTheme, Theme } from '@react-navigation/native';
import { backgroundContainer } from './styles/colors';

export const theme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: backgroundContainer,
  },
}