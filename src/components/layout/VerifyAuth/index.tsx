import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {AuthStackList} from '../../../utils/types/navigation.type';
import {useAppSelector} from '../../../redux/hooks';

interface WithAuthProps {
  [key: string]: any;
}

const verifyAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const ComponentWithAuth: React.FC<WithAuthProps> = props => {
    const navigation = useNavigation<NavigationProp<AuthStackList>>();
    const {isAuthenticated, loading} = useAppSelector(state => state.auth);

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        navigation.navigate('Landing');
      }
    }, [loading, isAuthenticated, navigation]);

    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };

  return ComponentWithAuth;
};

export default verifyAuth;
