// Imports
import React from 'react';
import {Image, StyleSheet} from 'react-native';

// Styles
import {Body} from '../../components/ui';
import {ImageContainer} from './styles';

import Logo from '../../assets/images/logo.png';

export default function LoadingScreen() {
  return (
    <Body justifyToCenter>
      <ImageContainer>
        <Image source={Logo} style={styles.image} />
      </ImageContainer>
    </Body>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    flex: 1,
    width: null,
    height: null,
  },
});
