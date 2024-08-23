import React from 'react';
import {Modal, Text, View} from 'react-native';
import {ButtonReject, Paragraph, Tittle1} from '../../basics';
import {style} from './style';
import {IRepositoryDetail} from '../../../utils/interface/repository.interface';

interface IModalRepositoryDetail {
  visible: boolean;
  onClose: () => void;
  data: IRepositoryDetail;
}

const ModalRepositoryDetail: React.FC<IModalRepositoryDetail> = ({
  visible,
  onClose,
  data,
}) => {
  const {
    name,
    description,
    owner,
    created_at,
    updated_at,
    html_url,
    language,
    size,
    default_branch,
    stargazers_count,
    forks_count,
    watchers_count,
    homepage,
  } = data;

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={style.modalContainer}>
        <View style={style.modal}>
          <View style={style.container}>
            <Tittle1 title={`${owner.login}/${name}`} />
            <Text>
              <Paragraph
                title={`Repository Name: `}
                style={{fontWeight: 'bold'}}
              />
              <Paragraph title={`${name}`} />
            </Text>
            <Text>
              <Paragraph title="Owner: " style={{fontWeight: 'bold'}} />
              <Paragraph title={`${owner.login}`} />
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
            <Text>
              <Paragraph title={`Last Update: `} style={{fontWeight: 'bold'}} />
              <Paragraph
                title={`${new Date(String(updated_at)).toLocaleDateString(
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
          <View style={{marginTop: 10}}>
            <Text>
              <Paragraph title={`Size: `} style={{fontWeight: 'bold'}} />
              <Paragraph title={`${size} MB`} />
            </Text>
            {language ? (
              <Text>
                <Paragraph title={`Language: `} style={{fontWeight: 'bold'}} />
                <Paragraph title={`${language}`} />
              </Text>
            ) : null}
            <Text>
              <Paragraph
                title={`Default Branch: `}
                style={{fontWeight: 'bold'}}
              />
              <Paragraph title={`${default_branch}`} />
            </Text>
            <Text>
              <Paragraph title={`Stars: `} style={{fontWeight: 'bold'}} />
              <Paragraph title={`${stargazers_count || 0}   `} />
              <Paragraph title={`Forks: `} style={{fontWeight: 'bold'}} />
              <Paragraph title={`${forks_count || 0}   `} />
              <Paragraph title={`Watchers: `} style={{fontWeight: 'bold'}} />
              <Paragraph title={`${watchers_count || 0}`} />
            </Text>
            {description && (
              <Text>
                <Paragraph
                  title={`Description: `}
                  style={{fontWeight: 'bold'}}
                />
                <Paragraph title={`${description}`} />
              </Text>
            )}
            <Text>
              <Paragraph
                title={`Repository's URL: `}
                style={{fontWeight: 'bold'}}
              />
              <Paragraph title={html_url} />
            </Text>
            {homepage && (
              <Text>
                <Paragraph title={`Homepage: `} style={{fontWeight: 'bold'}} />
                <Paragraph title={`${homepage}`} />
              </Text>
            )}
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

export default ModalRepositoryDetail;
