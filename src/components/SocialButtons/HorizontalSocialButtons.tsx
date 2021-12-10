import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import CustomButton from '../Buttons/CustomButton';

interface HorizontalSocialButtonsProps {
  width: number;
  withGoogle: () => void;
  withFacebook: () => void;
}

const HorizontalSocialButtons = (props: HorizontalSocialButtonsProps) => {
  const { width, withFacebook, withGoogle } = props;

  const numberOfButtons = 2;
  const distanceBetweenButtons = 20;
  const buttonWidth =
    (width - (numberOfButtons - 1) * distanceBetweenButtons) / numberOfButtons;

  return (
    <View style={[styles.container, { width }]}>
      {/* LOGIN WITH GOOGLE */}
      <CustomButton onPress={withGoogle} width={buttonWidth} type="TERTIARY">
        <View style={[styles.textWrapper, { width: buttonWidth }]}>
          <Image
            source={require('../../assets/images/social-media/google-letter.png')}
            style={[styles.image]}
          />
          <Text style={styles.text}>Google</Text>
        </View>
      </CustomButton>
      {/* LOGIN WITH FACEBOOK */}
      <CustomButton onPress={withFacebook} width={buttonWidth} type="TERTIARY">
        <View style={[styles.textWrapper, { width: buttonWidth }]}>
          <Image
            source={require('../../assets/images/social-media/facebook-letter.png')}
            style={[styles.image]}
          />
          <Text style={styles.text}>Facebook</Text>
        </View>
      </CustomButton>
    </View>
  );
};

export default HorizontalSocialButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF00',
    padding: 10,
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 30,
  },
  text: {
    fontWeight: 'bold',
  },
});
