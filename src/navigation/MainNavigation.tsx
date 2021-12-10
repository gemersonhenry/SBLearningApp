import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackParamList } from './navigation.config';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmail/ConfirmEmailScreen';
import RecoveryPasswordScreen from '../screens/RecoveryPassword/RecoveryPasswordScreen';
import NewPasswordScreen from '../screens/NewPassword/NewPasswordScreen';
import InitialIntroduceScreen from '../screens/InitialIntroduce/InitialIntroduceScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface MainNavigationProps {}

const MainNavigation = (props: MainNavigationProps) => {
  const {} = props;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="REGISTER">
        {/* LOGIN AND REGISTER */}
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LOGIN" component={LoginScreen} />
          <Stack.Screen name="REGISTER" component={RegisterScreen} />
          <Stack.Screen name="CONFIRM_EMAIL" component={ConfirmEmailScreen} />
          <Stack.Screen name="RECOVERY_PASSWORD" component={RecoveryPasswordScreen} />
          <Stack.Screen name="NEW_PASSWORD" component={NewPasswordScreen} />
          <Stack.Screen name="INITIAL_INTRODUCE" component={InitialIntroduceScreen} />
          <Stack.Screen name="CATEGORIES_SELECTION" component={LoginScreen} />
        </Stack.Group>

        {/* BUSINESS */}
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HOME01" component={LoginScreen} />
          <Stack.Screen name="HOME02" component={LoginScreen} />
          <Stack.Screen name="HOME03" component={LoginScreen} />
          <Stack.Screen name="SEARCH01" component={LoginScreen} />
          <Stack.Screen name="SEARCH02" component={LoginScreen} />
          <Stack.Screen name="PROFILE01" component={LoginScreen} />
          <Stack.Screen name="PROFILE02" component={LoginScreen} />
          <Stack.Screen name="COURSES" component={LoginScreen} />
          <Stack.Screen name="COURSE_DETAIL" component={LoginScreen} />
          <Stack.Screen name="NOTIFICATIONS" component={LoginScreen} />
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
