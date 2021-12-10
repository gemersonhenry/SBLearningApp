import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface NewPasswordScreenProps {}

const NewPasswordScreen = (props: NewPasswordScreenProps) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>NewPasswordScreen</Text>
    </View>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {},
});
