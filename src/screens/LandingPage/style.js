import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../styles/mixins';

const LandingPageStyle = StyleSheet.create({
  imgStyle: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {height: windowHeight * 0.3, width: windowWidth * 0.85},
  arrowContainer: {
    width: '100%',
    marginVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {LandingPageStyle};
