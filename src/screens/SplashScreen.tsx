import React from 'react';
import { ActivityIndicator, Image, ImageBackground } from 'react-native';
import { SpaceComponent } from '../componets';
import { appColors } from '../constants/appColors';
import { appInfos } from '../constants/appInfos';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}
      imageStyle={{flex: 1}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfos.sizes.WIDTH,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={16}/>
      <ActivityIndicator color={appColors.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;

