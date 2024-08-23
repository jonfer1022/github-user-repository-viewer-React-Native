import React from 'react';
import {Paragraph, SimpleCard} from '../../basics';
import {Image, Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {IRepository} from '../../../utils/interface/repository.interface';
import {style} from './style';

interface ICardRepository {
  onPress: (owner: string, repo: string) => void;
  data: IRepository;
  style?: StyleProp<ViewStyle>;
}

const CardRepository: React.FC<ICardRepository> = ({
  onPress,
  data,
  style: _style,
}) => {
  const {owner, name, full_name, description} = data;
  return (
    <SimpleCard style={_style}>
      <Pressable
        style={style.pressable}
        onPress={() => onPress(owner.login, name)}>
        <View style={style.detail}>
          <Image style={style.image} source={{uri: owner.avatar_url}} />
          <View style={style.textContainer}>
            <Text>
              <Paragraph
                title={`Repository Name: `}
                style={{fontWeight: 'bold'}}
              />
              <Paragraph title={name} />
            </Text>
            <Text>
              <Paragraph title={`Owner: `} style={{fontWeight: 'bold'}} />
              <Paragraph title={owner.login} />
            </Text>
            <Text>
              <Paragraph title={`Path: `} style={{fontWeight: 'bold'}} />
              <Paragraph title={full_name} />
            </Text>
            {description && (
              <Text>
                <Paragraph
                  title={`Description: `}
                  style={{fontWeight: 'bold'}}
                />
                <Paragraph title={description} />
              </Text>
            )}
          </View>
        </View>
      </Pressable>
    </SimpleCard>
  );
};

export default CardRepository;
