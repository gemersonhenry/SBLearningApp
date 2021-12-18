import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ConfirmEmailScreenProps {}

const ConfirmEmailScreen = (props: ConfirmEmailScreenProps) => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>ConfirmEmailScreen</Text>
    </View>
  );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
  container: {},
});
