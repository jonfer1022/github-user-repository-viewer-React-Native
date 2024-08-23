import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import {ButtonReject, Paragraph} from '../../basics';
import {style} from './style';
import {IUserDetail} from '../../../utils/interface/user.interface';

interface IModalUserDetail {
  data: IUserDetail;
  visible: boolean;
  onClose: () => void;
}

const ModalUserDetail: React.FC<IModalUserDetail> = ({
  visible,
  onClose,
  data,
}) => {
  const {
    avatar_url,
    name,
    login,
    created_at,
    followers,
    following,
    bio,
    email,
    public_repos,
    html_url,
  } = data;

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={style.modalContainer}>
        <View style={style.modal}>
          <View style={style.header}>
            <Image style={style.image} source={{uri: avatar_url}} />
            <View style={style.textContainer}>
              <Text>
                <Paragraph title={`Name: `} style={{fontWeight: 'bold'}} />
                <Paragraph title={`${name}`} />
              </Text>
              <Text>
                <Paragraph title={`Username: `} style={{fontWeight: 'bold'}} />
                <Paragraph title={`${login}`} />
              </Text>
              <Text>
                <Paragraph title={`Created: `} style={{fontWeight: 'bold'}} />
                <Paragraph
                  title={`${new Date(String(created_at)).toLocaleDateString(
                    'en-CA',
                    {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                      weekday: 'long',
                    },
                  )}`}
                />
              </Text>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text>
              <Paragraph title={`Followers: `} style={{fontWeight: 'bold'}} />
              <Paragraph title={`${followers}`} />
              <Paragraph title={`  Following: `} style={{fontWeight: 'bold'}} />
              <Paragraph title={`${following}`} />
            </Text>
            <Text>
              <Paragraph
                title={`Public repositories: `}
                style={{fontWeight: 'bold'}}
              />
              <Paragraph title={`${public_repos}`} />
            </Text>
            {bio && (
              <Text>
                <Paragraph title={`Bio: `} style={{fontWeight: 'bold'}} />
                <Paragraph title={`${bio}`} />
              </Text>
            )}
            {email && (
              <Text>
                <Paragraph title={`Email: `} style={{fontWeight: 'bold'}} />
                <Paragraph title={`${email}`} />
              </Text>
            )}
            <Text>
              <Paragraph
                title={`Profile's URL: `}
                style={{fontWeight: 'bold'}}
              />
              <Paragraph title={html_url} />
            </Text>
          </View>
          <View style={style.buttonContainer}>
            <ButtonReject
              onPress={() => {
                if (onClose) onClose();
              }}
              title={'Close'}
              customStyle={{marginRight: 5}}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalUserDetail;
