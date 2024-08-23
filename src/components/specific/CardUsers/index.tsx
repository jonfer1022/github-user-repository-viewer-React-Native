import React from 'react';
import {Paragraph, SimpleCard} from '../../basics';
import {Image, Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {IUser} from '../../../utils/interface/user.interface';
import {TextLink} from '../../basics/TextCustom';
import {style} from './style';

interface ICardUser {
  data: IUser;
  onPress: (text: string) => void;
  style?: StyleProp<ViewStyle>;
}

const CardUser: React.FC<ICardUser> = ({data, style: _style, onPress}) => {
  const {avatar_url, login, html_url, id} = data;
  return (
    <SimpleCard style={_style}>
      <Pressable style={style.pressable} onPress={() => onPress(String(id))}>
        <Image style={style.image} source={{uri: avatar_url}} />
        <View style={style.detail}>
          <Text>
            <Paragraph title={`Username: `} style={{fontWeight: 'bold'}} />
            <Paragraph title={login} />
          </Text>
          <Text>
            <Paragraph title={`Profile's URL: `} style={{fontWeight: 'bold'}} />
            <TextLink title={html_url} />
          </Text>
        </View>
      </Pressable>
    </SimpleCard>
  );
};

export default CardUser;
