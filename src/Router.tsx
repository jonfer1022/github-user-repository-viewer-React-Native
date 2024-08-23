import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackList} from './utils/types/navigation.type';
import {HomeRoot, Landing} from './views';
import {mainContainer} from './style';
import {theme} from './utils/theme';
import {useAppSelector} from './redux/hooks';

const Stack = createNativeStackNavigator<AuthStackList>();

const Router = () => {
  const {isAuthenticated} = useAppSelector(state => state.auth);

  return (
    <SafeAreaView style={mainContainer.container}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          initialRouteName={isAuthenticated ? 'HomeRoot' : 'Landing'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="HomeRoot" component={HomeRoot} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Router;
