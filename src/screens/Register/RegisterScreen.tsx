import React, { useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/Buttons/CustomButton';
import CustomLink from '../../components/Buttons/CustomLink';

import CustomInput01 from '../../components/Inputs/CustomInput01';
import HorizontalSocialButtons from '../../components/SocialButtons/HorizontalSocialButtons';
import { SCREEN } from '../../constants/theme/Sizes';
import { TITLES } from '../../constants/theme/Titles';
import { useKeyboard } from '../../hooks/useKeyboard';
import { NavigationScreenProps } from '../../navigation/navigation.interface';
import { NavigationActions } from '../../navigation/NavigationActions';

/**
 * settings for main container
 */
const containerPadding = 20;
const contentWidth = SCREEN.width - 2 * containerPadding;

interface RegisterScreenProps extends NavigationScreenProps {}

const RegisterScreen = (props: RegisterScreenProps) => {
  const { navigation } = props;
  const [navActions, setNavActions] = useState<NavigationActions | null>(null);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isKeyboardOpen = useKeyboard();

  const onRegister = useCallback(() => {
    navActions?.navigateTo('HOME01');
  }, [navActions]);

  const onRegisterWithGoogle = useCallback(() => {
    console.log('onLoginWithGoogle');
  }, []);

  const onRegisterWithFacebook = useCallback(() => {
    console.log('onLoginWithFacebook');
  }, []);

  const onLogin = useCallback(() => {
    console.log('onSignUp');
  }, []);

  /**
   * This implementation is for testing a customized behavior
   */
  useEffect(() => {
    /**
     * Setting navigation actions
     */
    const actions = new NavigationActions(navigation);
    setNavActions(actions);

    return () => {
      setNavActions(null);
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {isKeyboardOpen ? null : <Text style={styles.title}>REGISTER</Text>}
      <CustomInput01
        label="Username"
        value={username}
        setValue={setUsername}
        width={contentWidth}
        marginBottom={20}
        marginTop={isKeyboardOpen ? 130 : 0} // this is applied when keyboard appears
        styleType="OUTLINE"
        keyboardType="email-address"
        validationType="username"
      />
      <CustomInput01
        label="Email"
        value={email}
        setValue={setEmail}
        width={contentWidth}
        marginBottom={20}
        styleType="OUTLINE"
        keyboardType="email-address"
        validationType="email"
      />
      <CustomInput01
        label="Password"
        value={password}
        setValue={setPassword}
        width={contentWidth}
        marginBottom={20}
        secureType={true}
        styleType="OUTLINE"
      />
      <CustomButton
        text="REGISTER ACCOUNT"
        onPress={onRegister}
        type="PRIMARY"
        width={contentWidth}
        marginBottom={20}
      />
      <Text style={styles.text}>Or login with</Text>
      <HorizontalSocialButtons
        width={contentWidth}
        withGoogle={onRegisterWithGoogle}
        withFacebook={onRegisterWithFacebook}
      />
      <Text style={styles.text}>Are you a new user?</Text>
      <CustomLink text="Sign up here!" linkEvent={onLogin} />
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: containerPadding,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...TITLES.h2,
    position: 'absolute',
    top: 20,
  },
  text: {
    marginBottom: 20,
  },
});
