import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonSecondary, InputTextIcon, Loading} from '../../components/basics';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  getRepositories,
  getRepositoryByNameAndPath,
  getRepositoryByPath,
} from '../../redux/reducers/repositories.reducer';
import CardRepository from '../../components/specific/CardRepository';
import {style} from './style';
import ModalRepositoryDetail from '../../components/specific/ModalRepositoryDetail';

const Repositories: React.FC = () => {
  const [since, setSince] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    repositories,
    loading,
    error,
    repositorySearched,
    lastSince,
    flagRepositorySearched,
  } = useAppSelector(state => state.repositories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (search?.length) {
        searchRepositoryByName(search);
      }
    }, 700);
    return () => clearTimeout(timeOutId);
  }, [search]);

  const searchRepositoryByName = useCallback((path: string) => {
    dispatch(getRepositoryByPath({path}));
  }, []);

  const searchRepositoryByNameAndRepo = useCallback(
    (name: string, repo: string) => {
      dispatch(getRepositoryByNameAndPath({name, repo})).then(() =>
        setShowModal(true),
      );
    },
    [],
  );

  const getAllRepositories = useCallback((_since: number) => {
    if (lastSince !== _since) {
      dispatch(getRepositories({since: _since}));
      setSince(_since);
    }
  }, []);

  useEffect(() => {
    getAllRepositories(since);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <InputTextIcon
        keyboardType="web-search"
        customStyle={{marginBottom: 0}}
        value={search}
        placeholder={`Search repo by path (ex: username/repo_name)`}
        onChange={(text: string) => {
          setSearch(text);
          if (text.length === 0) {
            dispatch(getRepositories({since: 1}));
          }
        }}
        icon={
          <View>
            <AntDesign name="search1" size={20} color="white" />
          </View>
        }
      />
      <ScrollView style={style.scrollContainer}>
        {repositories?.map(repository => (
          <CardRepository
            key={repository.id}
            style={{paddingVertical: 10}}
            data={repository}
            onPress={(owner: string, repo: string) =>
              searchRepositoryByNameAndRepo(owner, repo)
            }
          />
        ))}
        <ButtonSecondary
          style={{marginBottom: 30, marginTop: 5}}
          title="Load more"
          disabled={loading || Boolean(error) || flagRepositorySearched}
          onPress={() => {
            getAllRepositories(
              Number(repositories[repositories.length - 1].id),
            );
          }}
        />
      </ScrollView>
      {Object.keys(repositorySearched).length ? (
        <ModalRepositoryDetail
          visible={showModal}
          onClose={() => setShowModal(!showModal)}
          data={repositorySearched}
        />
      ) : null}
      <Loading isVisible={loading} />
    </SafeAreaView>
  );
};

export default Repositories;
