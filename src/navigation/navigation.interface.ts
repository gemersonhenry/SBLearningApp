import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './navigation.config';

export interface NavigationScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}
