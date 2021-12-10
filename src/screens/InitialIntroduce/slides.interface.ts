import { ImageSourcePropType } from 'react-native';

export interface ISlide {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}
