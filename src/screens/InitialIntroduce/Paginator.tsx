import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { screenWidth } from '../../utils/dimensions.util';

import { ISlide } from './slides.interface';

const DOT_DIAMETER = 10;
const DOT_OPACITY = 0.3;

interface PaginatorProps {
  slides: ISlide[];
  scrollX: Animated.Value;
}

const Paginator = (props: PaginatorProps) => {
  const { slides, scrollX } = props;
  return (
    <View style={styles.container}>
      {slides.map((_, index) => {
        const inputRange = [
          (index - 1) * screenWidth,
          index * screenWidth,
          (index + 1) * screenWidth,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [DOT_DIAMETER, DOT_DIAMETER * 2, DOT_DIAMETER],
          extrapolate: 'clamp', // al quitar este atributo sale un comportamiento interesante
        });

        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: [DOT_OPACITY, 1, DOT_OPACITY],
          extrapolate: 'clamp', // al quitar este atributo sale un comportamiento interesante
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity: dotOpacity }]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
  },
  dot: {
    height: DOT_DIAMETER,
    borderRadius: 8,
    backgroundColor: '#493d8a',
    marginHorizontal: 8,
  },
});
