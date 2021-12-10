import { NavigationProp } from '@react-navigation/core';
import { RootStackParamList } from './navigation.config';

export class NavigationManager {
  /**
   * @param navigation: should be set when you want to navigate
   * @param route: a valid route name
   * @param reset: when is true the stack will be clean and route will be the new first route
   */
  static navigateTo(
    navigation: NavigationProp<RootStackParamList>,
    route: keyof RootStackParamList,
    reset = false,
  ) {
    if (reset) {
      navigation.reset({
        index: 0,
        routes: [{ name: route }],
      });
    } else {
      navigation.navigate(route);
    }
  }

  static navigateToBack(navigation: NavigationProp<RootStackParamList>) {
    navigation.goBack();
  }
}
