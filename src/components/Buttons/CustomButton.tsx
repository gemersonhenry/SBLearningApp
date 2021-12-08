import React from 'react';
import { Text, GestureResponderEvent, TouchableHighlight } from 'react-native';

import { SCREEN } from '../../constants/theme/Sizes';
import { BUTTON_STYLES } from './ButtonStyles';

interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  type?:
    | 'PRIMARY'
    | 'PRIMARY_OUTLINE'
    | 'SECONDARY'
    | 'SECONDARY_OUTLINE'
    | 'TERTIARY'
    | 'TERTIARY_OUTLINE';
  bgColor?: string;
  fontColor?: string;
  marginHorizontal?: number;
  width?: number;
}

const CustomButton = (props: CustomButtonProps) => {
  const { onPress, text, type, bgColor, fontColor, marginHorizontal, width } =
    props;

  const currentType = type ?? 'PRIMARY';
  const currentWidth = !width
    ? marginHorizontal
      ? SCREEN.width - 2 * marginHorizontal
      : SCREEN.width
    : width;

  return (
    <TouchableHighlight
      onPress={onPress}
      style={[
        BUTTON_STYLES.container,
        BUTTON_STYLES[`container_${currentType}`],
        bgColor ? { backgroundColor: bgColor } : {},
        marginHorizontal ? { marginHorizontal } : {},
        { width: currentWidth },
      ]}>
      <Text
        style={[
          BUTTON_STYLES.text,
          BUTTON_STYLES[`text_${currentType}`],
          fontColor ? { color: fontColor } : {},
        ]}>
        {text}
      </Text>
    </TouchableHighlight>
  );
};

export default CustomButton;
