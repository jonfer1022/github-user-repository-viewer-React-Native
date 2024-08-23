import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ButtonPrimary, SubTittle} from '../../components/basics';
import {AuthStackList} from '../../utils/types/navigation.type';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {login} from '../../redux/reducers/auth.reducer';
import {style} from './style';

const Landing: React.FC = () => {
  const navigation = useNavigation<NavigationProp<AuthStackList>>();
  const {isAuthenticated} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('HomeRoot');
    }
  }, [isAuthenticated, navigation]);

  const handleLogin = () => {
    dispatch(login());
    navigation.navigate('HomeRoot');
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.welcomeContainer}>
        <AntDesign name="github" size={100} color={'white'} />
        <SubTittle
          style={{textAlign: 'center', marginTop: 40}}
          title={
            'Welcome to GitHub Users and Repositories viewer, please click button to continue'
          }
        />
      </View>
      <View style={style.welcomeButtons}>
        <ButtonPrimary onPress={() => handleLogin()} title={'Continue'} />
      </View>
    </SafeAreaView>
  );
};

export default Landing;
