import {useTheme} from '@react-navigation/native';
import {SafeAreaView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Formik} from 'formik';

import authErrorMessage from '../../../utils/authErrorMessage';
import toastMessage from '../../../utils/toastMessage';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './Sign.style';

const initialValues = {
  email: '',
  password: '',
  passwordAgain: '',
};

export default function Sign({navigation}) {
  const {opa} = useTheme();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = values => {
    console.log(values);
    if (values.password !== values.passwordAgain) return;
    if (!values.email || values.email.indexOf('@') < 1) return;
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        toastMessage('Kullanıcı oluşturuldu. Giriş yapın');
        setLoading(false);
        navigation.navigate('Login');
      })
      .catch(error => {
        authErrorMessage(error.code);
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.container(opa.set1)}>
      <Text style={styles.logo}>codetalks</Text>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="E-postanızı giriniz..."
            />
            <Input
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Şifrenizi giriniz..."
            />
            <Input
              value={values.passwordAgain}
              onChangeText={handleChange('passwordAgain')}
              placeholder="Şifrenizi tekrar giriniz..."
            />
            <Button
              text="Kayıt Ol"
              isColored={true}
              onPress={handleSubmit}
              waiting={loading}
            />
          </>
        )}
      </Formik>
      <Button text="Geri" onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
}
