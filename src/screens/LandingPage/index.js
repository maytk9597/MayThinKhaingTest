import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {gestureConfig} from '../../styles/mixins';
import {LandingPageStyle} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {WHITE} from '../../styles/colors';
import Geolocation from '@react-native-community/geolocation';
import {fetchWeatherAPI} from '../../utils';

const LandingPage = ({navigation}) => {
  let [location, setLocation] = useState(null);
  const changePage = async () => {
    console.log('change');
    const dateTime = await fetchWeatherAPI(location.lat, location.lon);
    navigation.navigate('Welcome Page', {
      dt: dateTime.dt,
      timezone: dateTime.timezone,
    });
  };
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        setLocation({lat: info.coords.latitude, lon: info.coords.longitude});
      },
      error => {
        const {code, message} = error;
        if (code === 'CANCELLED') {
          console.log('Cancelled');
        } else if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        } else if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        } else if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        } else {
          console.log('something went wrong');
        }
      },
    );
  });
  return (
    <GestureRecognizer
      config={gestureConfig}
      style={{flex: 1}}
      onSwipeUp={changePage}>
      <View>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <ImageBackground
          source={require('../../../assets/LandingPage.jpg')}
          style={LandingPageStyle.imgStyle}
          resizeMode="cover">
          <View style={LandingPageStyle.logoContainer}>
            <Image
              source={require('../../../assets/Logo.png')}
              style={LandingPageStyle.imgLogo}
              resizeMode="contain"
            />
          </View>
          <Pressable style={LandingPageStyle.arrowContainer}>
            <Icon
              name="chevron-triple-up"
              size={80}
              color={WHITE}
              onPress={changePage}
            />
          </Pressable>
        </ImageBackground>
      </View>
    </GestureRecognizer>
  );
};

export default LandingPage;
