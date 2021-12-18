import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CategoriesSelectionScreenProps {}

const CategoriesSelectionScreen = (props: CategoriesSelectionScreenProps) => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>CategoriesSelectionScreen</Text>
    </View>
  );
};

export default CategoriesSelectionScreen;

const styles = StyleSheet.create({
  container: {},
});
