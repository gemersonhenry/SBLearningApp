import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LoginWithPhoneScreenProps {}

const LoginWithPhoneScreen = (props: LoginWithPhoneScreenProps) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>LoginWithPhoneScreen</Text>
    </View>
  );
};

export default LoginWithPhoneScreen;

const styles = StyleSheet.create({
  container: {},
});
