import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import {StyleSheet, SafeAreaView, View} from 'react-native';

interface LoginScreenProps {}

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField placeholder="이메일" error="이메일을 입력해주세요." />
        <InputField
          placeholder="비밀번호"
          error="비밀번호를 입력해주세요."
          secureTextEntry
        />
      </View>
      <CustomButton label="로그인" size="large" onPress={() => {}} />
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

export default LoginScreen;
