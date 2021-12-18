import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { SCREEN } from '../../constants/theme/Sizes';

interface UserCardSkeletonFirstProps {
  width?: number;
}

const UserCardSkeletonFirst = (props: UserCardSkeletonFirstProps) => {
  const { width } = props;

  const currentWidth = width ? width : SCREEN.width * 0.8;
  const photoSize = currentWidth * 0.3;
  const hSpace = 30;
  const vSpace = 10;
  const barSize = currentWidth - photoSize - hSpace;
  const barHeight = 20;

  return (
    <SkeletonPlaceholder>
      <View style={styles.container}>
        <View style={{ width: photoSize, height: photoSize, borderRadius: photoSize / 2 }} />
        <View style={{ marginLeft: hSpace }}>
          <View style={{ width: barSize, height: barHeight, borderRadius: barHeight / 4 }} />
          <View style={{ marginTop: vSpace, width: barSize - 60, height: barHeight, borderRadius: barHeight / 4 }} />
          <View style={{ marginTop: vSpace, width: barSize - 40, height: barHeight, borderRadius: barHeight / 4 }} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default UserCardSkeletonFirst;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
});
