import {StyleSheet} from 'react-native';
import {PRIMARYTXTCOLOR, WHITE} from '../../styles/colors';
import {windowHeight, windowWidth} from '../../styles/mixins';

const WelcomePageStyle = StyleSheet.create({
  imgStyle: {
    height: '100%',
  },
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: windowHeight,
  },
  headerContainer: {
    marginVertical: 80,
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerTxt: time => ({
    color: time == 'Welcome_Night' ? WHITE : PRIMARYTXTCOLOR,
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor: PRIMARYTXTCOLOR,
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 15,
  }),
  bodyContainer: {
    marginTop: windowHeight * 0.25,
    width: windowWidth * 0.8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  bodyTxt: time => ({
    color: time == 'Welcome_Night' ? WHITE : PRIMARYTXTCOLOR,
    fontSize: 23,
    textAlign: 'center',
    textShadowColor: PRIMARYTXTCOLOR,
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 15,
  }),
  arrowContainer: {
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {WelcomePageStyle};
