import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ButtonSecondary, InputTextIcon, Loading} from '../../components/basics';
import CardUser from '../../components/specific/CardUsers';
import {ScrollView, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  getUserById,
  getUserByName,
  getUsers,
} from '../../redux/reducers/users.reducer';
import ModalUserDetail from '../../components/specific/ModalUserDetail';
import {style} from './style';

const Home: React.FC = () => {
  const [since, setSince] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const {users, loading, error, flagUserSearched, userSerched, lastSince} =
    useAppSelector(state => state.users);
  const dispatch = useAppDispatch();

  const searchUserByName = useCallback((name: string) => {
    dispatch(getUserByName({name}));
  }, []);

  const searchUserById = useCallback((id: string) => {
    dispatch(getUserById({id})).then(() => setShowModal(true));
  }, []);

  const getAllUsers = useCallback((_since: number) => {
    if (lastSince !== _since) {
      dispatch(getUsers({since: _since}));
      setSince(_since);
    }
  }, []);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (search?.length) {
        searchUserByName(search);
      }
    }, 700);
    return () => clearTimeout(timeOutId);
  }, [search]);

  useEffect(() => {
    getAllUsers(since);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <InputTextIcon
        keyboardType="web-search"
        customStyle={{marginBottom: 0}}
        value={search}
        placeholder={`Search by username`}
        onChange={(text: string) => {
          setSearch(text);
          if (text.length === 0) {
            dispatch(getUsers({since: 0}));
          }
        }}
        icon={
          <View style={style.searchContainer}>
            <AntDesign name="search1" size={20} color="white" />
          </View>
        }
      />
      <ScrollView style={style.scrollContainer}>
        {users?.map(user => (
          <CardUser
            onPress={id => searchUserById(id)}
            key={user.id}
            data={user}
          />
        ))}
        <ButtonSecondary
          style={{marginBottom: 30, marginTop: 5}}
          title="Load more"
          disabled={loading || Boolean(error) || flagUserSearched}
          onPress={() => {
            getAllUsers(Number(users[users.length - 1].id));
          }}
        />
      </ScrollView>
      {Object.keys(userSerched).length ? (
        <ModalUserDetail
          visible={showModal}
          onClose={() => setShowModal(!showModal)}
          data={userSerched}
        />
      ) : null}
      <Loading isVisible={loading} />
    </SafeAreaView>
  );
};

export default Home;
