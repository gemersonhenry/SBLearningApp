import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const GLOBAL_SIZES = {
  // global sizes
  base: 8,
  font: 16,
  radius: 12,
  padding: 24,
};

const { font } = GLOBAL_SIZES;
export const SIZES = {
  // title fonts
  h1: 36,
  h2: 24,
  h3: 20,
  h4: 16,

  // paragraph fonts
  'p-4': font - 8,
  'p-3': font - 6,
  'p-2': font - 4,
  'p-1': font - 2,
  'p-0': font,
  'p+1': font + 2,
  'p+2': font + 4,
  'p+3': font + 6,
  'p+4': font + 8,
};

export const SCREEN = {
  // app dimensions
  width,
  height,
};
