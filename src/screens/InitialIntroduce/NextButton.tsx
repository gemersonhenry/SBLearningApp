import React, { useCallback, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface NextButtonProps {
  percentage: number;
}

const SQUARE_SIZE = 128;
const ICON_SIZE = 48;
const ICON_PADDING = 10;
const TOP_LEFT = SQUARE_SIZE / 2 - ICON_PADDING - ICON_SIZE / 2;

const NextButton = (props: NextButtonProps) => {
  const { percentage } = props;
  const size = SQUARE_SIZE;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;

  const circunference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = useCallback(
    (toValue: number) => {
      // console.log('toValue: ', toValue);
      return Animated.timing(progressAnimation, {
        toValue,
        duration: 250,
        useNativeDriver: true,
      }).start();
    },
    [progressAnimation],
  );

  useEffect(() => {
    animation(percentage);
  }, [animation, percentage]);

  useEffect(() => {
    const listenerId = progressAnimation.addListener(value => {
      // console.log('value: ', value);
      const strokeDashoffset =
        circunference - (circunference * value.value) / 100;
      if (progressRef?.current) {
        (progressRef.current as any).setNativeProps({ strokeDashoffset });
      }
    });
    return () => {
      progressAnimation.removeListener(listenerId);
    };
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#F4338F"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circunference}
            strokeDashoffset={circunference - (circunference * 10) / 100}
          />
        </G>
      </Svg>
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={ICON_SIZE} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#F4338F',
    borderRadius: 100,
    padding: ICON_PADDING,
    top: TOP_LEFT,
    left: TOP_LEFT,
  },
});
