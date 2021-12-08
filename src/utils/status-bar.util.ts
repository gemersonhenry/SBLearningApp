import { Platform, StatusBar } from 'react-native';

export const STATUS_BAR =
  Platform.OS === 'android' ? StatusBar.currentHeight : 0;
