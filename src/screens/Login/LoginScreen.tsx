import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CustomButton from '../../components/Buttons/CustomButton';

interface LoginScreenProps {}

const LoginScreen = (props: LoginScreenProps) => {
  const {} = props;

  const onButtonPress = () => {
    console.log('onButtonPress');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton text="ACEPTAR" onPress={onButtonPress} type="PRIMARY" />
      <CustomButton
        text="ACEPTAR"
        onPress={onButtonPress}
        type="PRIMARY_OUTLINE"
      />
      <CustomButton text="ACEPTAR" onPress={onButtonPress} type="SECONDARY" />
      <CustomButton
        text="ACEPTAR"
        onPress={onButtonPress}
        type="SECONDARY_OUTLINE"
      />
      <CustomButton text="ACEPTAR" onPress={onButtonPress} type="TERTIARY" />
      <CustomButton
        text="ACEPTAR"
        onPress={onButtonPress}
        type="TERTIARY_OUTLINE"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
});
