import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import CustomButton from '../../../components/Buttons/CustomButton';
import CustomLink from '../../../components/Buttons/CustomLink';
import VerticalSocialButtons from '../../../components/SocialButtons/VerticalSocialButtons';
import { SCREEN } from '../../../constants/theme/Sizes';
import { TITLES } from '../../../constants/theme/Titles';
import { NavigationScreenProps } from '../../../navigation/navigation.interface';
import { NavigationActions } from '../../../navigation/NavigationActions';

interface LoginWithScreenProps extends NavigationScreenProps {}

const LoginWithScreen = (props: LoginWithScreenProps) => {
  const { navigation } = props;

  const contentWidth = SCREEN.width - 40;

  const [navActions, setNavActions] = useState<NavigationActions | null>(null);

  const onLoginWithEmail = () => {
    navActions?.navigateTo('LOGIN_WIHT_EMAIL');
  };

  const onLoginWithPhone = () => {
    navActions?.navigateTo('LOGIN_WIHT_PHONE');
  };

  const onLoginWithGoogle = () => {
    console.log('onLoginWithGoogle');
  };

  const onLoginWithFacebook = () => {
    console.log('onLoginWithFacebook');
  };

  const onLoginWithApple = () => {
    console.log('onLoginWithFacebook');
  };

  const onRegister = () => {
    navActions?.navigateTo('REGISTER_WITH');
  };

  useEffect(() => {
    const actions = new NavigationActions(navigation);
    setNavActions(actions);

    return () => {
      setNavActions(null);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INGRESA CON</Text>
      <CustomButton
        text="Correo Electrónico"
        onPress={onLoginWithEmail}
        type="PRIMARY"
        width={contentWidth}
        marginBottom={20}
      />
      <CustomButton
        text="Número de Celular"
        onPress={onLoginWithPhone}
        type="PRIMARY"
        width={contentWidth}
        marginBottom={20}
      />
      <VerticalSocialButtons
        width={contentWidth}
        withGoogle={onLoginWithGoogle}
        withFacebook={onLoginWithFacebook}
        withApple={onLoginWithApple}
      />
      <Text style={styles.text}>¿No tienes una cuenta?</Text>
      <CustomLink text="Registrate aquí!" linkEvent={onRegister} />
    </View>
  );
};

export default LoginWithScreen;

const styles = StyleSheet.create({
  container: {
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
