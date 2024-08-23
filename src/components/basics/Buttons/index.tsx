/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {Pressable} from 'react-native';
import {style} from './style';
import {Paragraph} from '..';

interface IButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  customStyle?: object;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const ButtonPrimary = ({
  onPress,
  title,
  customStyle,
  disabled = false,
}: IButtonProps) => {
  return (
    <TouchableOpacity>
      <Pressable
        onPress={() => (disabled ? null : onPress())}
        style={[style.primary, customStyle, {opacity: disabled ? 0.5 : 1}]}>
        <Paragraph style={style.alignCenter} title={title} />
      </Pressable>
    </TouchableOpacity>
  );
};

export const ButtonSecondary = ({
  onPress,
  title,
  customStyle,
  style: _style,
  disabled = false,
}: IButtonProps) => {
  return (
    <TouchableOpacity>
      <Pressable
        disabled={disabled}
        onPress={onPress}
        style={[
          style.secondary,
          _style,
          customStyle,
          {opacity: disabled ? 0.5 : 1},
        ]}>
        <Paragraph style={style.alignCenter} title={title} />
      </Pressable>
    </TouchableOpacity>
  );
};

export const ButtonReject = ({
  onPress,
  title,
  customStyle,
  disabled = false,
}: IButtonProps) => {
  return (
    <TouchableOpacity>
      <Pressable
        onPress={onPress}
        style={[style.reject, customStyle, {opacity: disabled ? 0.5 : 1}]}>
        <Paragraph style={style.alignCenter} title={title} />
      </Pressable>
    </TouchableOpacity>
  );
};
