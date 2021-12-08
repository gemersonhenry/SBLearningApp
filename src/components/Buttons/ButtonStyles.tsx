import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme/Colors';
import { PARAGRAPHS } from '../../constants/theme/Paragraphs';

export const BUTTON_STYLES = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 25,
  },

  container_PRIMARY: {
    backgroundColor: COLORS.primary,
  },
  container_PRIMARY_OUTLINE: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  container_SECONDARY: {
    backgroundColor: COLORS.secondary,
  },
  container_SECONDARY_OUTLINE: {
    borderColor: COLORS.secondary,
    borderWidth: 2,
  },
  container_TERTIARY: {
    backgroundColor: COLORS.lightgray,
  },
  container_TERTIARY_OUTLINE: {
    borderColor: COLORS.lightgray,
    borderWidth: 2,
  },

  text: {
    fontWeight: 'bold',
    ...PARAGRAPHS['p-0'],
  },
  text_PRIMARY: {
    color: COLORS.white,
  },
  text_PRIMARY_OUTLINE: {
    color: COLORS.primary,
  },
  text_SECONDARY: {
    color: COLORS.white,
  },
  text_SECONDARY_OUTLINE: {
    color: COLORS.secondary,
  },
  text_TERTIARY: {
    color: COLORS.gray,
  },
  text_TERTIARY_OUTLINE: {
    color: COLORS.gray,
  },
});
