import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '../../components';
import {useAuth} from '../../hooks/useAuth';
import useLogin from './useLogin';
import {NavigatorParamsList} from '../../navigators/app-navigator';
import styles from './login-screen.styles';

type Props = NativeStackScreenProps<NavigatorParamsList, 'login'>;
export const LoginScreen = (props: Props) => {
  const {onLogin} = useAuth({navigation: props.navigation});
  const {username, password, setUsername, setPassword, onSubmit} = useLogin();
  return (
    <View style={styles.container}>
      <Text testID="header" style={styles.header}>
        Login
      </Text>
      <TextInput
        testID="username"
        placeholder="username"
        value={username}
        onChangeText={setUsername}
        style={styles.textInput}
        autoCapitalize="none"
      />
      <View style={styles.separator} />
      <TextInput
        testID="password"
        placeholder="******"
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
        secureTextEntry
      />
      <Button
        testID="loginButton"
        color="green"
        text="Login"
        onPress={() => onSubmit(onLogin)}
      />
    </View>
  );
};
