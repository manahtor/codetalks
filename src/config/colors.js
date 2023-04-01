import {DefaultTheme} from '@react-navigation/native';

export const colors = {
  set1: '#ff6f00',
  set2: '#ffa040',
  set3: '#ffb74d',
};

export const colorscheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.set3,
    // card: colors.set3,
    text: colors.set1,
  },
  opa: colors,
};
