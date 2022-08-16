import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '../../components';
import {useAuth} from '../../hooks/useAuth';
import {NavigatorParamsList} from '../../navigators/app-navigator';
import styles from './home-screen.styles';

type Props = NativeStackScreenProps<NavigatorParamsList, 'home'>;
export const HomeScreen = (props: Props) => {
  const {onLogout} = useAuth({navigation: props.navigation});
  return (
    <View style={styles.container}>
      <Text testID="header" style={styles.header}>
        Welcome to demo app
      </Text>
      <Text testID="subtitle" style={styles.subtitle}>
        Test your code, not your patience
      </Text>
      <Button testID="logoutBtn" color="red" text="Logout" onPress={onLogout} />
    </View>
  );
};
