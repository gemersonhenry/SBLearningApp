import { ValidationType } from './error-messages.validation';
import { CELLPHONE_REGEX, DNI_REGEX, EMAIL_REGEX, USERNAME_REGEX } from './regexp';

export type IValidation = {
  [key in ValidationType]: (value: string) => boolean;
};

// SEPARATE VALIDATIONS

export const isValidEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};

export const isValidCellphone = (cell: string) => {
  return CELLPHONE_REGEX.test(cell);
};

export const isValidDNI = (dni: string) => {
  return DNI_REGEX.test(dni);
};

export const isValidUsername = (username: string) => {
  return USERNAME_REGEX.test(username);
};

// GROUP VALIDATIONS

export const InputValidations = {
  email: (email: string) => {
    return isValidEmail(email);
  },
  dni: (dni: string) => {
    return isValidDNI(dni);
  },
  cellphone: (cell: string) => {
    return isValidCellphone(cell);
  },
  username: (username: string) => {
    return isValidUsername(username);
  },
} as IValidation;
