import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <View
      style={[globalStyles.container, {padding: 20, backgroundColor: 'coral'}]}>
      <Text>LoginScreen</Text>
      {/* <Button
        title="Login"
        onPress={async () =>
          await AsyncStorage.setItem('assetToken', '1234567890')
        }
      /> */}
      <ButtonComponent
        type="link"
        text="LOGIN"
        onPress={() => console.log('login')}
        icon={
          <View>
            <Text>Icon</Text>
          </View>
        }
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
