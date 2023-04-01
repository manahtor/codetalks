import {useTheme} from '@react-navigation/native';
import {SafeAreaView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Formik} from 'formik';

import authErrorMessage from '../../../utils/authErrorMessage';
import toastMessage from '../../../utils/toastMessage';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './Login.style';

const initialValues = {
  email: '',
  password: '',
};

export default function Login({navigation}) {
  const {opa} = useTheme();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = values => {
    console.log(values);
    if (!values.email || !values.password) return;
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        toastMessage('Giriş Yapıldı');
        setLoading(false);
        navigation.navigate('Rooms');
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
            <Button
              onPress={handleSubmit}
              waiting={loading}
              isColored={true}
              text="Giriş Yap"
            />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" onPress={() => navigation.navigate('Sign')} />
      {/* <View style={{height: 200}}></View> */}
    </SafeAreaView>
  );
}
