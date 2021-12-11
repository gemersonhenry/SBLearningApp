import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
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

interface LoginScreenProps extends NavigationScreenProps {}

const LoginScreen = (props: LoginScreenProps) => {
  const { navigation } = props;
  const [navActions, setNavActions] = useState<NavigationActions | null>(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isKeyboardOpen = useKeyboard();

  const onLogin = () => {
    navActions?.navigateTo('HOME01');
  };

  const onLoginWithGoogle = () => {
    console.log('onLoginWithGoogle');
  };

  const onLoginWithFacebook = () => {
    console.log('onLoginWithFacebook');
  };

  const onSignUp = () => {
    console.log('onSignUp');
  };

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
      {isKeyboardOpen ? null : <Text style={styles.title}>LOGIN</Text>}
      <CustomInput01
        label="Username or Email"
        value={username}
        setValue={setUsername}
        width={contentWidth}
        marginBottom={20}
        marginTop={isKeyboardOpen ? 40 : 0} // this is applied when keyboard appears
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
      <CustomButton text="LOGIN" onPress={onLogin} type="PRIMARY" width={contentWidth} marginBottom={20} />
      <Text style={styles.text}>Or login with</Text>
      <HorizontalSocialButtons width={contentWidth} withGoogle={onLoginWithGoogle} withFacebook={onLoginWithFacebook} />
      <Text style={styles.text}>Are you a new user?</Text>
      <CustomLink text="Sign up here!" linkEvent={onSignUp} />
    </SafeAreaView>
  );
};

export default LoginScreen;

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
