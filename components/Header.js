import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import TitleText from './TitleText';
import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={{
      ...styles.headerBase, ...Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndriod
      })
    }}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
    /* borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0 */
  },
  headerIOS: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerAndriod: {
    backgroundColor: Colors.primary,
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white'
  }
});

export default Header;