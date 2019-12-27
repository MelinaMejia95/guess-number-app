import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  ScrollView
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/success.png')}
            // source={{ uri: '' }}  Images from the web
            style={styles.image}
            resizeMode='cover' />
        </View>
        <View style={{
          ...styles.resultContainer, ...{
            marginVertical: availableDeviceHeight / 60
          }
        }}>
          <BodyText style={{
            ...styles.resultText, ...{
              fontSize: availableDeviceHeight < 400 ? 16 : 20
            }
          }}>
            Your phone needed <Text style={styles.highlight}>{props.roundsNumber} </Text>
            rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    maxWidth: 300,
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    // marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    // fontSize: 20
  }
});

export default GameOverScreen;