import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LoginWithEmailScreenProps {}

const LoginWithEmailScreen = (props: LoginWithEmailScreenProps) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>LoginWithEmailScreen</Text>
    </View>
  );
};

export default LoginWithEmailScreen;

const styles = StyleSheet.create({
  container: {},
});
