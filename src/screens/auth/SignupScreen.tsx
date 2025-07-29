import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {useState} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';

interface SignupScreenProps {}

function SignupScreen() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChangeValue = (
    name: 'email' | 'password' | 'passwordConfirm',
    text: string,
  ) => {
    setValues({...values, [name]: text});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          value={values.email}
          onChangeText={text => handleChangeValue('email', text)}
        />
        <InputField
          placeholder="비밀번호"
          value={values.password}
          onChangeText={text => handleChangeValue('password', text)}
          secureTextEntry
          textContentType="oneTimeCode"
        />
        <InputField
          placeholder="비밀번호 확인"
          value={values.passwordConfirm}
          onChangeText={text => handleChangeValue('passwordConfirm', text)}
          secureTextEntry
        />
      </View>
      <CustomButton label="회원가입" size="large" onPress={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default SignupScreen;
