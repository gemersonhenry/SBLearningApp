import { ImageSourcePropType } from 'react-native';

export interface IUser {
  id: string;
  email: string;
  names: string;
  photo: ImageSourcePropType;
  fatherLastName?: string;
  motherLastName?: string;
  documentType?: 'DNI' | 'PASSPORT' | 'IMMIGRATION_CARD';
  documentNumber?: string;
  fullAddress?: string;
}
