import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import TextComponent from './TextComponent';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    onPress,
    iconFlex,
  } = props;
  return type === 'primary' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.button,
        {backgroundColor: color ?? appColors.primary},
        styles,
      ]}>
      {icon && icon}
      <TextComponent
        text={text}
        color={textColor ?? appColors.white}
        font={fontFamilies.medium}
        styles={[textStyles, {marginLeft: icon ? 12 : 0}]}
        flex={icon && iconFlex === 'left' ? 1 : 0}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity>
      <TextComponent text={text} color={type === 'link' ? appColors.primary : appColors.text}></TextComponent>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
