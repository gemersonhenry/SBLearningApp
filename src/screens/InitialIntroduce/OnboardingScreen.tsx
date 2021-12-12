import React, { useRef, useState } from 'react';
import { StyleSheet, FlatList, View, Animated, ViewToken } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import slidesMock from '../../assets/mocks/slides.mock';
import { Logger } from '../../helpers/logger';
import MainSlide from './MainSlide';
import NextButton from './NextButton';
import Paginator from './Paginator';
import { ISlide } from './slides.interface';

const SLIDES = slidesMock as ISlide[];

const OnboardingScreen = () => {
  Logger.log('OnboardingScreen');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const { index } = viewableItems[0];
    console.log('index: ', index);
    setCurrentIndex(index as number);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBox}>
        {/* Imagen + title + description */}
        <FlatList
          data={SLIDES}
          renderItem={({ item }) => <MainSlide slide={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
          scrollEventThrottle={10}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      {/* Paginator */}
      <Paginator slides={SLIDES} scrollX={scrollX} />
      {/* Button for next */}
      <NextButton
        percentage={(currentIndex + 1) * (100 / SLIDES.length)}
        index={currentIndex}
        numberOfSlides={SLIDES.length}
      />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topBox: {
    flex: 1,
  },
});
