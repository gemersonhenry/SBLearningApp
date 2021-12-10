import * as React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../../constants/theme/Colors';

interface CustomLinkProps {
  text: string;
  linkEvent: () => void;
}

const CustomLink = (props: CustomLinkProps) => {
  const { text, linkEvent } = props;

  return (
    <Pressable onPress={linkEvent}>
      <Text style={styles.link}>{text}</Text>
    </Pressable>
  );
};

export default CustomLink;

const styles = StyleSheet.create({
  link: {
    color: COLORS.primary,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
