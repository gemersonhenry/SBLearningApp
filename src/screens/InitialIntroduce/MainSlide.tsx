/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { screenWidth } from '../../utils/dimensions.util';
import { ISlide } from './slides.interface';

interface MainSlideProps {
  slide: ISlide;
}

const MainSlide = (props: MainSlideProps) => {
  const { slide } = props;

  return (
    <View style={[styles.container, { width: screenWidth }]}>
      <Image
        source={slide.image}
        style={[
          styles.image,
          {
            width: screenWidth,
            height: screenWidth,
            resizeMode: 'contain',
          },
        ]}
      />
      <View style={styles.bottomBox}>
        <Text style={styles.title}> {slide.title} </Text>
        <Text style={styles.description}> {slide.description} </Text>
      </View>
    </View>
  );
};

export default MainSlide;

/**
 * Recordar que la dirección principal es la vertical
 * Por ejemplo: justifyContent es para la vertical y alignItems es para la horizontal
 */
const styles = StyleSheet.create({
  container: {
    flex: 1, // asegurar ocupar toda la altura
  },
  image: {
    // top box in this screen
    flex: 3,
    justifyContent: 'center',
  },
  bottomBox: {
    // bottom box in this screen
    flex: 1,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
