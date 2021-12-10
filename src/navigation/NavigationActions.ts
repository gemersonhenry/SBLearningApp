import { NavigationProp } from '@react-navigation/core';
import { RootStackParamList } from './navigation.config';
import { NavigationManager } from './NavigationManager';

type NavigationType = NavigationProp<RootStackParamList>;

export class NavigationActions {
  _navigation: NavigationType;

  constructor(navigation: NavigationType) {
    this._navigation = navigation;
  }

  public navigateTo(route: keyof RootStackParamList) {
    const { _navigation } = this;
    switch (route) {
      case 'HOME01':
        NavigationManager.navigateTo(_navigation, route, true);
        break;
      default:
        NavigationManager.navigateTo(_navigation, route);
        break;
    }
  }

  public navigateToBack() {
    const { _navigation } = this;
    NavigationManager.navigateToBack(_navigation);
  }
}
