import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {View,Text,StyleSheet} from  'react-native'

const Header = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Header;