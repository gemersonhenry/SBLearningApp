import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackParamList } from './navigation.config';
import AppLoadingScreen from '../screens/AppLoading/AppLoadingScreen';
import LoginWithScreen from '../screens/LOGIN_FLOW/LoginWith/LoginWithScreen';
import LoginWithEmailScreen from '../screens/LOGIN_FLOW/LoginWithEmail/LoginWithEmailScreen';
import LoginWithPhoneScreen from '../screens/LOGIN_FLOW/LoginWithPhone/LoginWithPhoneScreen';
import InitialIntroduceScreen from '../screens/LOGIN_FLOW/InitialIntroduce/InitialIntroduceScreen';
import CategoriesSelectionScreen from '../screens/LOGIN_FLOW/CategoriesSelection/CategoriesSelectionScreen';
import Home01Screen from '../screens/BUSINESS_FLOW/Home01/Home01Screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface MainNavigationProps {}

const MainNavigation = (props: MainNavigationProps) => {
  const {} = props;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="APP_LOADING">
        <Stack.Screen name="APP_LOADING" component={AppLoadingScreen} options={{ headerShown: false }} />

        {/* LOGIN */}
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LOGIN_WIHT" component={LoginWithScreen} />
          <Stack.Screen name="LOGIN_WIHT_EMAIL" component={LoginWithEmailScreen} />
          <Stack.Screen name="LOGIN_WIHT_PHONE" component={LoginWithPhoneScreen} />
          <Stack.Screen name="INITIAL_INTRODUCE" component={InitialIntroduceScreen} />
          <Stack.Screen name="CATEGORIES_SELECTION" component={CategoriesSelectionScreen} />
        </Stack.Group>

        {/* REGISTER */}
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="REGISTER_WITH" component={LoginWithScreen} />
          <Stack.Screen name="REGISTER_WIHT_EMAIL" component={LoginWithScreen} />
          <Stack.Screen name="CONFIRM_EMAIL" component={LoginWithScreen} />
          <Stack.Screen name="REGISTER_WIHT_PHONE" component={LoginWithScreen} />
          <Stack.Screen name="CONFIRM_PHONE" component={LoginWithScreen} />
          <Stack.Screen name="RECOVERY_PASSWORD_BY_EMAIL" component={LoginWithScreen} />
          <Stack.Screen name="RECOVERY_PASSWORD_BY_PHONE" component={LoginWithScreen} />
          <Stack.Screen name="NEW_PASSWORD" component={LoginWithScreen} />
        </Stack.Group>

        {/* BUSINESS */}
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HOME01" component={Home01Screen} />
          <Stack.Screen name="HOME02" component={LoginWithScreen} />
          <Stack.Screen name="HOME03" component={LoginWithScreen} />
          <Stack.Screen name="SEARCH01" component={LoginWithScreen} />
          <Stack.Screen name="SEARCH02" component={LoginWithScreen} />
          <Stack.Screen name="PROFILE01" component={LoginWithScreen} />
          <Stack.Screen name="PROFILE02" component={LoginWithScreen} />
          <Stack.Screen name="COURSES" component={LoginWithScreen} />
          <Stack.Screen name="COURSE_DETAIL" component={LoginWithScreen} />
          <Stack.Screen name="NOTIFICATIONS" component={LoginWithScreen} />
        </Stack.Group>

        {/* INFORMATIVE MODALS */}
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          {/* <Stack.Screen name="faq" component={FaqModal} /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
