import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface RecoveryPasswordScreenProps {}

const RecoveryPasswordScreen = (props: RecoveryPasswordScreenProps) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>RecoveryPasswordScreen</Text>
    </View>
  );
};

export default RecoveryPasswordScreen;

const styles = StyleSheet.create({
  container: {},
});
