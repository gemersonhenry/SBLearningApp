/* eslint-disable prettier/prettier */

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {

  // APP LOADING
  APP_LOADING: undefined;

  // LOGIN
  LOGIN_WIHT: undefined;
  LOGIN_WIHT_EMAIL: undefined;
  LOGIN_WIHT_PHONE: undefined;
  INITIAL_INTRODUCE: undefined;
  CATEGORIES_SELECTION: undefined;

  // REGISTER
  REGISTER_WITH: undefined;
  REGISTER_WIHT_EMAIL: undefined;
  CONFIRM_EMAIL: undefined;
  REGISTER_WIHT_PHONE: undefined;
  CONFIRM_PHONE: undefined;
  RECOVERY_PASSWORD_BY_EMAIL: undefined;
  RECOVERY_PASSWORD_BY_PHONE: undefined;
  NEW_PASSWORD: undefined;

  // LOGIN AND REGISTER
  LOGIN: undefined; // PENDING TO DELETE
  REGISTER: undefined; // PENDING TO DELETE
  RECOVERY_PASSWORD: undefined; // PENDING TO DELETE

  // BUSINESS
  HOME01: undefined;
  HOME02: undefined;
  HOME03: undefined;
  SEARCH01: undefined;
  SEARCH02: undefined;
  PROFILE01: undefined;
  PROFILE02: undefined;
  COURSES: undefined;
  COURSE_DETAIL: undefined;
  NOTIFICATIONS: undefined;

  // MODALS
  FAQ: undefined;
};
