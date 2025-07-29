import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {AuthStackParamList} from '@/types/navigation';

type Navigation = StackNavigationProp<AuthStackParamList>;

function AuthHomeScreen() {
  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    console.log('AuthHomeScreen');
  }, []);
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>로그인으로 이동</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
