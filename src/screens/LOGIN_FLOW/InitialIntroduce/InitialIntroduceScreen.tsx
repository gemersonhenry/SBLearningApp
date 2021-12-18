import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface InitialIntroduceScreenProps {}

const InitialIntroduceScreen = (props: InitialIntroduceScreenProps) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>InitialIntroduceScreen</Text>
    </View>
  );
};

export default InitialIntroduceScreen;

const styles = StyleSheet.create({
  container: {},
});
