import React, { useEffect } from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';

import { COLORS } from '../../constants/theme/Colors';
import { NavigationScreenProps } from '../../navigation/navigation.interface';
import { NavigationActions } from '../../navigation/NavigationActions';

interface AppLoadingScreenProps extends NavigationScreenProps {}

const AppLoadingScreen = (props: AppLoadingScreenProps) => {
  const { navigation } = props;

  useEffect(() => {
    /**
     * Setting navigation actions
     */
    const actions = new NavigationActions(navigation);
    setTimeout(() => {
      actions.navigateTo('LOGIN_WIHT');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/login/lobos-logo.jpg')} />
      <ActivityIndicator size="large" color="#0044ff" style={styles.loadingIndicator} />
    </View>
  );
};

export default AppLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  image: {
    width: 200,
    height: 200,
  },
  loadingIndicator: {
    position: 'absolute',
    bottom: 60,
  },
});
