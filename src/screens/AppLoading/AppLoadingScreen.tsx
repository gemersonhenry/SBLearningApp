import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AppLoadingScreenProps {}

const AppLoadingScreen = (props: AppLoadingScreenProps) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>AppLoadingScreen</Text>
    </View>
  );
};

export default AppLoadingScreen;

const styles = StyleSheet.create({
  container: {},
});
