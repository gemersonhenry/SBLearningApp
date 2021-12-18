import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import CustomButton from '../Buttons/CustomButton';

interface VerticalSocialButtonsProps {
  width: number;
  withGoogle: () => void;
  withFacebook: () => void;
  withApple: () => void;
}

const VerticalSocialButtons = (props: VerticalSocialButtonsProps) => {
  const { width, withGoogle, withFacebook, withApple } = props;

  return (
    <>
      {/* LOGIN WITH GOOGLE */}
      <CustomButton onPress={withGoogle} width={width} type="TERTIARY" marginBottom={20}>
        <View style={[styles.textWrapper, { width: width }]}>
          <Image source={require('../../assets/images/social-media/google-letter.png')} style={[styles.image]} />
          <Text style={styles.text}>Google</Text>
        </View>
      </CustomButton>
      {/* LOGIN WITH FACEBOOK */}
      <CustomButton onPress={withFacebook} width={width} type="TERTIARY" marginBottom={20}>
        <View style={[styles.textWrapper, { width: width }]}>
          <Image source={require('../../assets/images/social-media/facebook-letter.png')} style={[styles.image]} />
          <Text style={styles.text}>Facebook</Text>
        </View>
      </CustomButton>
      {/* LOGIN WITH APPLE */}
      <CustomButton onPress={withApple} width={width} type="TERTIARY" marginBottom={20}>
        <View style={[styles.textWrapper, { width: width }]}>
          <Image source={require('../../assets/images/social-media/apple-letter.png')} style={[styles.image]} />
          <Text style={styles.text}>Apple</Text>
        </View>
      </CustomButton>
    </>
  );
};

export default VerticalSocialButtons;

const styles = StyleSheet.create({
  container: {},
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
