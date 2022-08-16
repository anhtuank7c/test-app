import {StackActions, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback} from 'react';

interface Result {
  onLogin: (username: String, password: String) => void;
  onLogout: () => void;
}
interface Props {
  navigation: NativeStackNavigationProp<ParamListBase>;
}
export const useAuth = ({navigation}: Props): Result => {
  const onLogin = useCallback(
    (username: String, password: String) => {
      if (username !== 'tuan' || password !== '123456') {
        throw Error('Invalid credentials');
      }
      navigation.dispatch(StackActions.replace('home'));
    },
    [navigation],
  );

  const onLogout = useCallback(() => {
    navigation.dispatch(StackActions.replace('login'));
  }, [navigation]);

  return {
    onLogin,
    onLogout,
  };
};
