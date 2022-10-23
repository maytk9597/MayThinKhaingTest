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
import {PRIMARYTXTCOLOR, WHITE} from '../../styles/colors';
import {WelcomePageStyle} from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  welcomeMorningMsg,
  welcomeNightMsg,
  welcomeNoonMsg,
  windowHeight,
} from '../../styles/mixins';
import {currentTime, fetchWeatherAPI} from '../../utils';
import moment from 'moment';

const WelcomePage = ({navigation, route}) => {
  const dateTime = route.params;
  const [time, setTime] = useState();
  useEffect(() => {
    const current = currentTime(dateTime.dt, dateTime.timezone);
    if (
      moment(current).isBetween(
        moment('1:00:00', 'hh:mm:ss'),
        moment('12:00:00', 'hh:mm:ss'),
      )
    ) {
      setTime('Welcome_Morning');
    } else if (
      moment(current).isBetween(
        moment('12:00:00', 'hh:mm:ss'),
        moment('18:00:00', 'hh:mm:ss'),
      )
    ) {
      setTime('Welcome_Noon');
    } else {
      setTime('Welcome_Night');
    }
  });

  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={
          time == 'Welcome_Morning'
            ? require(`../../../assets/Welcome_Morning.jpg`)
            : time == 'Welcome_Noon'
            ? require(`../../../assets/Welcome_Noon.jpeg`)
            : require(`../../../assets/Welcome_Night.jpg`)
        }
        style={WelcomePageStyle.imgStyle}
        resizeMode="cover">
        <SafeAreaView style={WelcomePageStyle.mainContainer}>
          <View style={WelcomePageStyle.headerContainer}>
            <Text style={WelcomePageStyle.headerTxt(time)}>WELCOME</Text>
            <View style={WelcomePageStyle.bodyContainer}>
              <Text style={WelcomePageStyle.bodyTxt(time)}>
                {time == 'Welcome_Morning'
                  ? welcomeMorningMsg
                  : time == 'Welcome_Noon'
                  ? welcomeNoonMsg
                  : welcomeNightMsg}
              </Text>
            </View>
          </View>

          <Pressable
            style={WelcomePageStyle.arrowContainer}
            onPress={() => {
              console.log('press');
              navigation.navigate('Tab Page');
            }}>
            <Icon
              name="chevron-triple-right"
              size={80}
              color={time == 'Welcome_Night' ? WHITE : PRIMARYTXTCOLOR}
            />
          </Pressable>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default WelcomePage;
