/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput } from 'react-native';

import { COLORS } from '../../constants/theme/Colors';
import { SIZES } from '../../constants/theme/Sizes';

type inputStyleTypes = 'UNDERLINE' | 'OUTLINE';
const validStylesTypes = ['UNDERLINE', 'OUTLINE'];

interface CustomInput01Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  width: number;
  placeholder?: string;
  secureType?: boolean;
  styleType?: inputStyleTypes;
  marginBottom?: number;
  marginTop?: number;
  keyboardType?: KeyboardTypeOptions;
}

const CustomInput01 = (props: CustomInput01Props) => {
  const {
    label,
    value,
    setValue,
    onFocus,
    onBlur,
    width,
    placeholder,
    secureType,
    styleType,
    marginBottom,
    marginTop,
    keyboardType,
  } = props;
  const currentStyleType =
    styleType && validStylesTypes.includes(styleType as string)
      ? styleType
      : 'OUTLINE';

  return (
    <>
      <Text
        style={[
          styles.label,
          {
            width,
            marginTop,
            marginBottom: currentStyleType === 'UNDERLINE' ? 0 : 10,
          },
        ]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          styles[`input_${currentStyleType}`],
          {
            width,
            marginBottom,
            paddingHorizontal: currentStyleType === 'UNDERLINE' ? 0 : 15,
          },
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        onFocus={onFocus}
        onBlur={onBlur}
        secureTextEntry={secureType}
        keyboardType={keyboardType}
      />
    </>
  );
};

export default CustomInput01;

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 10,
    color: COLORS.primary,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  input: {
    fontSize: SIZES['p-0'],
  },
  input_UNDERLINE: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightgray,
  },
  input_OUTLINE: {
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.lightgray,
    borderRadius: 10,
  },
});
