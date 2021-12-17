import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Home01ScreenProps {}

const Home01Screen = (props: Home01ScreenProps) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>Home01Screen</Text>
    </View>
  );
};

export default Home01Screen;

const styles = StyleSheet.create({
  container: {},
});
