import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RegisterScreenProps {}

const RegisterScreen = (props: RegisterScreenProps) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {},
});
