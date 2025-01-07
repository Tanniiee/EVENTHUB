import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import { appColors } from '../../constants/appColors';
import { appInfos } from '../../constants/appInfos';
import { globalStyles } from '../../styles/globalStyles';


const Onboarding = ({navigation}:any) => {
const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        loop={false}
        onIndexChanged={num => setIndex(num)}
        index={index}
        activeDotColor={appColors.white}
        autoplayTimeout={0.5} 
        scrollEnabled={true}>
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            flex: 1,
            width: appInfos.sizes.WIDTH,
            height: appInfos.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={{
            flex: 1,
            width: appInfos.sizes.WIDTH,
            height: appInfos.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            width: appInfos.sizes.WIDTH,
            height: appInfos.sizes.HEIGHT,
            resizeMode: 'cover',
          }}
        />
      </Swiper>
      <View
        style={[
          {
            paddingHorizontal: 16,
            paddingVertical: 20,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[styles.text, {color: appColors.gray2}]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index === 2
              ? navigation.navigate('LoginScreen')
              : setIndex(index + 1)
          }>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
text:{
  color: appColors.white,
  fontSize: 16,
  fontWeight: '500',
}
});
