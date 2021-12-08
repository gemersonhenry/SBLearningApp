/* eslint-disable prettier/prettier */

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {

  // LOGIN AND REGISTER
  LOGIN: undefined;
  REGISTER: undefined;
  CONFIRM_EMAIL: undefined;
  RECOVERY_PASSWORD: undefined;
  NEW_PASSWORD: undefined;
  INITIAL_INTRODUCE: undefined;
  CATEGORIES_SELECTION: undefined;

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
