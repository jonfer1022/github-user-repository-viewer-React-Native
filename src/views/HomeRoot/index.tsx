import React from 'react';
import {HomeRootStackList} from '../../utils/types/navigation.type';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Pressable, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import verifyAuth from '../../components/layout/VerifyAuth';
import {useAppDispatch} from '../../redux/hooks';
import {logout} from '../../redux/reducers/auth.reducer';
import {Users, Repositories} from '..';
import {style} from './style';

const BottomTab = createBottomTabNavigator<HomeRootStackList>();

const TabBarIcon = ({state, navigation}: BottomTabBarProps) => {
  const dispatch = useAppDispatch();
  const routes = state.routes;

  const choseIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <AntDesign name="user" size={22} color={'white'} />;
      case 'Repositories':
        return <Octicons name="repo" size={22} color={'white'} />;
    }
  };

  return (
    <View style={style.container}>
      {routes?.map(route => (
        <Pressable
          key={route.key}
          onPress={() => navigation.navigate(route.name)}
          style={style.buttonContainer}>
          {choseIcon(route.name)}
        </Pressable>
      ))}
      <Pressable
        onPress={() => {
          dispatch(logout());
          navigation.navigate('Landing');
        }}
        style={style.buttonContainer}>
        <AntDesign name="logout" size={22} color={'white'} />
      </Pressable>
    </View>
  );
};

const HomeRoot: React.FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Users"
      tabBar={props => <TabBarIcon {...props} />}
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}>
      <BottomTab.Screen name="Users" component={Users} />
      <BottomTab.Screen name="Repositories" component={Repositories} />
    </BottomTab.Navigator>
  );
};

export default verifyAuth(HomeRoot);
