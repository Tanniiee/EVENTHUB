import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LoginScreen</Text>
      <Button
        title="Login"
        onPress={async () =>
          await AsyncStorage.setItem('assetToken', '1234567890')
        }
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
