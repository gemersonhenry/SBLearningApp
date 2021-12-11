/**
 * Here you should update for updating all validations and messages
 */
export interface IValidationErrorMessages {
  email: string;
  dni: string;
  cellphone: string;
  username: string;
}

export const VALIDATION_ERROR_MESSAGES = {
  email: 'Email inválido.',
  dni: 'DNI inválido.',
  cellphone: 'Celular inválido.',
  username: 'Username inválido.',
} as IValidationErrorMessages;

/**
 * @key email: string;
 * @key dni: string;
 * @key cellphone: string;
 */
export type ValidationType = keyof IValidationErrorMessages;
